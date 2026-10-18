"""Prepare supplied brand graphics for the dark site.
- 'glow' mode (compliance, web): turn the light fog halo into a dim lime glow, smoothly (no hard masks)
- 'white' mode (translation): remove the white background, protect small details (flags)
Then fade edges to black and export WebP."""
import numpy as np, os
from PIL import Image, ImageFilter
U="/root/.claude/uploads/07a600cd-49a2-58f4-8e1f-2e5470d2bbe1/"
OUT="../public/assets/img/art/"; os.makedirs(OUT,exist_ok=True)
DARK=np.array([0.02,0.026,0.02])
def blur(m,r): return np.asarray(Image.fromarray((np.clip(m,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)/255
def finish(out,name,edge=1.18):
    H,W=out.shape[:2]; yy,xx=np.mgrid[0:H,0:W]; d=np.sqrt(((xx-W/2)/(W/2))**2+((yy-H/2)/(H/2))**2)
    v=np.clip((edge-d)/0.38,0,1); out=out*v[...,None]+DARK*(1-v[...,None])
    img=Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8))
    for w in (1536,900): img.resize((w,int(H*w/W)),Image.LANCZOS).save(f'{OUT}{name}-{w}.webp',quality=84,method=6)
    img.resize((900,int(H*900/W))).save(f'/tmp/{name}.png')
def glow(src,name):
    a=np.asarray(Image.open(U+src).convert('RGB')).astype(np.float32)/255
    mx=a.max(2); mn=a.min(2); sat=(mx-mn)/(mx+1e-6); L=a.mean(2)
    w=np.clip((0.5-sat)/0.35,0,1)                      # how "foggy" (desaturated) a pixel is
    tint=np.stack([0.55*L**1.8,0.78*L**1.8,0.06*L**1.8],-1)*0.55   # dim lime glow, smooth
    out=a*(1-w[...,None])+tint*w[...,None]
    finish(out,name)
def white(src,name,kill):
    a=np.asarray(Image.open(U+src).convert('RGB')).astype(np.float32)/255
    mx=a.max(2); mn=a.min(2); sat=(mx-mn)/(mx+1e-6)
    m=np.clip((0.35-sat)/0.25,0,1)*np.clip((mx-0.3)/0.3,0,1)
    M=blur(m,24); fog=np.clip(m*np.clip((M-0.45)/0.35,0,1),0,1)
    fog=np.maximum(fog,np.clip((M-0.8)/0.15,0,1))      # big open areas: fully remove
    out=a*(1-fog[...,None])+DARK*fog[...,None]
    # leftover pale fringes around artwork -> dim lime glow (flags stay protected: low neighbourhood fog)
    L=a.mean(2); w2=m*(1-fog)*np.clip((M-0.12)/0.25,0,1)
    tint=np.stack([0.55*L**1.8,0.78*L**1.8,0.06*L**1.8],-1)*0.5
    out=out*(1-w2[...,None])+tint*w2[...,None]
    H,W=mx.shape
    yy,xx=np.mgrid[0:H,0:W]; prot=np.zeros((H,W),np.float32)
    for cx,cy in [(450,190),(312,305),(458,402),(315,497),(473,580)]:   # flag discs keep original colours
        prot=np.maximum(prot,np.clip((52-np.sqrt((xx-cx)**2+(yy-cy)**2))/4,0,1))
    out=out*(1-prot[...,None])+a*prot[...,None]
    for (x0,y0,x1,y1) in kill:
        k=np.zeros((H,W),np.float32); k[y0:y1,x0:x1]=1; k=blur(k,18)
        out=out*(1-k[...,None])+DARK*k[...,None]
    finish(out,name,edge=1.25)
glow('97bb29e3-image.png','compliance')
glow('815ee9ce-image.png','web')
white('650f47f5-image.png','translation',kill=[(400,598,655,820),(0,0,360,260)])
g=Image.open(U+'87d8c523-image.png').convert('RGB')
for w in (1254,720): g.resize((w,w),Image.LANCZOS).save(f'{OUT}planet-{w}.webp',quality=86,method=6)
