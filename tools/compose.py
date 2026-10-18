"""Portfolio covers: desktop browser frame + phone, on a neutral graphite stage."""
from PIL import Image, ImageDraw, ImageFilter
import os
OUT='../public/assets/img/work'
for f in os.listdir(OUT): os.remove(os.path.join(OUT,f))
def rr(size,r):
    m=Image.new('L',size,0); ImageDraw.Draw(m).rounded_rectangle((0,0,size[0]-1,size[1]-1),r,fill=255); return m
def stage(W,H):
    bg=Image.new('RGB',(W,H),(13,16,13))
    g=Image.new('L',(W,H),0); ImageDraw.Draw(g).ellipse((-W*.3,-H*.6,W*.9,H*.7),fill=255); g=g.filter(ImageFilter.GaussianBlur(W*.12))
    bg.paste((24,28,23),(0,0),g.point(lambda v:int(v*.7)))
    return bg
def shadow(bg,box,r,blur,a):
    W,H=bg.size; sh=Image.new('L',(W,H),0); ImageDraw.Draw(sh).rounded_rectangle(box,r,fill=a); sh=sh.filter(ImageFilter.GaussianBlur(blur)); bg.paste((0,0,0),(0,0),sh)
def browser(shot,dw,crop_h=None):
    desk=Image.open(shot).convert('RGB'); dh=int(desk.height*dw/desk.width); desk=desk.resize((dw,dh),Image.LANCZOS)
    if crop_h: desk=desk.crop((0,0,dw,min(dh,crop_h)))
    bar=int(dw*0.026); fr=Image.new('RGB',(dw,desk.height+bar),(28,32,28)); d=ImageDraw.Draw(fr)
    for i in range(3): d.ellipse((bar*.5+i*bar*.6,bar*.35,bar*.5+i*bar*.6+bar*.3,bar*.65),fill=(64,68,64))
    fr.paste(desk,(0,bar)); return fr
def phone(shot,mw):
    mob=Image.open(shot).convert('RGB'); mh=int(mob.height*mw/mob.width); mob=mob.resize((mw,mh),Image.LANCZOS)
    pad=int(mw*.035); ph=Image.new('RGB',(mw+2*pad,mh+2*pad),(8,10,8)); ph.paste(mob,(pad,pad),rr(mob.size,int(mw*.09))); return ph
def compose(k,W,H,dw,mw,dx,dy,px_,py_):
    bg=stage(W,H)
    fr=browser(f'shots/{k}-desk.png',dw)
    shadow(bg,(dx+10,dy+30,dx+fr.width+10,dy+fr.height+40),16,34,150); bg.paste(fr,(dx,dy),rr(fr.size,14))
    ph=phone(f'shots/{k}-mob.png',mw); px,py=px_,py_
    shadow(bg,(px-8,py+20,px+ph.width+8,py+ph.height+30),int(mw*.13),30,200); bg.paste(ph,(px,py),rr(ph.size,int(mw*.12)))
    ImageDraw.Draw(bg).rounded_rectangle((px,py,px+ph.width-1,py+ph.height-1),int(mw*.12),outline=(58,64,56),width=2)
    return bg
for k in ['rosalie','mustermann','kfz']:
    # featured 16:10
    b=compose(k,1600,1000,1240,300,90,90,1600-300-130,1000-650-10)
    for w in (1600,900): b.resize((w,int(1000*w/1600)),Image.LANCZOS).save(f'{OUT}/{k}-feat-{w}.webp',quality=82,method=6)
    # card 4:3
    b=compose(k,1600,1200,1300,360,70,110,1600-360-120,1200-780-0)
    for w in (1600,900): b.resize((w,int(1200*w/1600)),Image.LANCZOS).save(f'{OUT}/{k}-card-{w}.webp',quality=82,method=6)
print(sorted(os.listdir(OUT)))
