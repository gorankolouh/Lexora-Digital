"""Covers for the country-edition kits (NIS2, e-invoicing, whistleblowing, accessibility).
Same look as the other kit covers: brand background (map + light trail), white title, lime subline,
a flat illustration on the right and the Lexora wordmark bottom right.
Input: the Lexora brand banner (2160x728). Run:  python3 tools/kit-covers.py /path/to/banner.png"""
import sys, os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BANNER = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), "../public/assets/img/shop/ed/")
FONT = os.path.join(os.path.dirname(__file__), "../public/assets/fonts/sora-var.woff")
W, H, S = 1600, 893, 2  # draw at 2x, then downsample
LIME, LIME_D, WHITE, PAPER, INK = (163, 230, 53), (110, 160, 30), (245, 247, 244), (226, 230, 232), (70, 80, 90)

def font(size, weight="ExtraBold"):
    f = ImageFont.truetype(FONT, size * S); f.set_variation_by_name(weight); return f

def background():
    b = Image.open(BANNER).convert("RGB")
    bh = b.height; bw = int(bh * W / H)
    bg = b.crop((0, 0, bw, bh))
    # hide the wordmark that starts on the right of this crop, with a soft edge
    m = Image.new("L", bg.size, 0)
    ImageDraw.Draw(m).rectangle((880, 110, bw + 200, 530), fill=255)
    m = m.filter(ImageFilter.GaussianBlur(28))
    for _ in range(2): bg.paste((4, 6, 4), (0, 0), m)
    bg = bg.resize((W * S, H * S), Image.LANCZOS)
    # wordmark, cut from the banner, placed bottom right like on the other covers
    wm = b.crop((930, 200, 1710, 400))
    ww = 250 * S; wm = wm.resize((ww, int(wm.height * ww / wm.width)), Image.LANCZOS)
    bg.paste(wm, (W * S - ww - 46 * S, H * S - wm.height - 34 * S))
    return bg

def rr(d, box, r, **kw): d.rounded_rectangle([v * S for v in box], r * S, **kw)

def panel(d, x, y, w, h):
    """light 'document' card with a header bar and lines, like the clipboard on the vendor cover"""
    rr(d, (x - 14, y - 14, x + w + 14, y + h + 14), 26, fill=(58, 66, 74))
    rr(d, (x, y, x + w, y + h), 16, fill=PAPER)
    for i in range(5):
        yy = y + 70 + i * 62
        rr(d, (x + 38, yy, x + 70, yy + 32), 6, outline=(150, 158, 166), width=4 * S)
        rr(d, (x + 92, yy + 4, x + w - 60 - (i % 2) * 70, yy + 14), 5, fill=(170, 176, 182))
        rr(d, (x + 92, yy + 22, x + w - 150, yy + 30), 4, fill=(196, 200, 204))

def glow(img, box, r=60):
    g = Image.new("L", img.size, 0)
    ImageDraw.Draw(g).ellipse([v * S for v in box], fill=150)
    g = g.filter(ImageFilter.GaussianBlur(r * S))
    img.paste(LIME_D, (0, 0), g)

def badge(img, cx, cy, kind):
    glow(img, (cx - 150, cy - 150, cx + 150, cy + 150))
    d = ImageDraw.Draw(img)
    c = lambda pts: [(px * S, py * S) for px, py in pts]
    if kind == "nis2":  # shield with a check
        pts = [(cx, cy - 120), (cx + 100, cy - 80), (cx + 92, cy + 20), (cx, cy + 120), (cx - 92, cy + 20), (cx - 100, cy - 80)]
        d.polygon(c(pts), fill=LIME); d.polygon(c([(cx, cy - 92), (cx + 74, cy - 62), (cx + 68, cy + 14), (cx, cy + 92)]), fill=(190, 245, 90))
        d.line(c([(cx - 42, cy), (cx - 10, cy + 32), (cx + 48, cy - 34)]), fill=(20, 30, 10), width=20 * S, joint="curve")
    elif kind == "einv":  # invoice with euro sign and a send arrow
        rr(d, (cx - 85, cy - 115, cx + 85, cy + 115), 14, fill=LIME)
        d.text((cx * S, (cy - 20) * S), "€", font=font(120), fill=(20, 30, 10), anchor="mm")
        for i in range(2): rr(d, (cx - 55, cy + 55 + i * 26, cx + 55 - i * 30, cy + 67 + i * 26), 5, fill=(40, 60, 15))
        d.ellipse(c([(cx + 50, cy + 50), (cx + 150, cy + 150)]), fill=(190, 245, 90))
        d.line(c([(cx + 72, cy + 100), (cx + 126, cy + 100)]), fill=(20, 30, 10), width=13 * S)
        d.line(c([(cx + 104, cy + 78), (cx + 128, cy + 100), (cx + 104, cy + 122)]), fill=(20, 30, 10), width=13 * S, joint="curve")
    elif kind == "wb":  # speech bubble with a lock: confidential report
        rr(d, (cx - 125, cy - 95, cx + 125, cy + 75), 40, fill=LIME)
        d.polygon(c([(cx - 60, cy + 70), (cx - 95, cy + 135), (cx - 10, cy + 70)]), fill=LIME)
        rr(d, (cx - 40, cy - 15, cx + 40, cy + 45), 10, fill=(20, 30, 10))
        d.arc(c([(cx - 28, cy - 62), (cx + 28, cy - 6)]), 180, 360, fill=(20, 30, 10), width=12 * S)
        d.line(c([(cx - 28, cy - 34), (cx - 28, cy - 12)]), fill=(20, 30, 10), width=12 * S)
        d.line(c([(cx + 28, cy - 34), (cx + 28, cy - 12)]), fill=(20, 30, 10), width=12 * S)
        d.ellipse(c([(cx - 9, cy + 6), (cx + 9, cy + 24)]), fill=LIME)
    elif kind == "eaa":  # accessibility figure in a circle
        d.ellipse(c([(cx - 125, cy - 125), (cx + 125, cy + 125)]), fill=LIME)
        k = (20, 30, 10)
        d.ellipse(c([(cx - 20, cy - 92), (cx + 20, cy - 52)]), fill=k)
        d.line(c([(cx - 80, cy - 30), (cx + 80, cy - 30)]), fill=k, width=18 * S)
        d.line(c([(cx, cy - 40), (cx, cy + 20)]), fill=k, width=24 * S)
        d.line(c([(cx, cy + 15), (cx - 40, cy + 90)]), fill=k, width=20 * S)
        d.line(c([(cx, cy + 15), (cx + 40, cy + 90)]), fill=k, width=20 * S)

def cover(key, lines, sub):
    img = background()
    d = ImageDraw.Draw(img)
    # title block, left, vertically centred above the light trail
    f = font(92 if max(len(l) for l in lines) < 13 else 80)
    lh = 108 if f.size // S == 92 else 96
    y0 = 230 if len(lines) == 2 else 175
    for i, l in enumerate(lines):
        d.text((108 * S, (y0 + i * lh) * S), l, font=f, fill=WHITE)
    d.text((110 * S, (y0 + len(lines) * lh + 34) * S), sub, font=font(30, "SemiBold"), fill=LIME)
    # illustration, right
    panel(d, 1010, 210, 360, 420)
    badge(img, 1360, 560, key)
    out = img.resize((W, H), Image.LANCZOS)
    for w in (1600, 900):
        out.resize((w, int(H * w / W)), Image.LANCZOS).save(f"{OUT}{key}-{w}.webp", quality=84, method=6)
    print(key)

cover("nis2", ["NIS2", "COMPLIANCE KIT"], "NOTION · REGISTERS · INCIDENT DEADLINES")
cover("einv", ["E-INVOICING", "READINESS KIT"], "NOTION · MANDATES · EN 16931 · PEPPOL")
cover("wb", ["WHISTLEBLOWER", "CHANNEL KIT"], "NOTION · CASE REGISTER · POLICY TEMPLATE")
cover("eaa", ["ACCESSIBILITY", "ACT KIT"], "NOTION · WCAG 2.1 AA · STATEMENT TEMPLATE")
