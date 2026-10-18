"""Bundle dist/en/index.html into one self-contained file for a quick preview link."""
import re,base64,sys
OUT=sys.argv[1]
s=open('dist/en/index.html').read()
def b64(p,mime): return f'data:{mime};base64,'+base64.b64encode(open(p,'rb').read()).decode()
css=open('public/assets/css/site.css').read()
css=re.sub(r'url\("\.\./fonts/([^"]+)"\)',lambda m:f'url("{b64("public/assets/fonts/"+m.group(1),"font/woff")}")',css)
body=re.search(r'<body>(.*)</body>',s,re.S).group(1)
body=re.sub(r'<script src="[^"]+"[^>]*></script>','',body)
body=re.sub(r' srcset="[^"]+"','',body)
body=re.sub(r'src="(/assets/img/[^"]+)"',lambda m:f'src="{b64("public"+m.group(1),"image/webp" if m.group(1).endswith(".webp") else "image/png")}"',body)
vid=b64('public/assets/video/planet-640.mp4','video/mp4')
body=re.sub(r'<source src="/assets/video/[^"]+\.webm"[^>]*>','',body)
body=re.sub(r'<source src="/assets/video/[^"]+" type="video/mp4"( media="[^"]*")?>',lambda m:f'<source src="{vid}" type="video/mp4">',body)
body=re.sub(r'poster="(/assets/img/[^"]+)"',lambda m:f'poster="{b64("public"+m.group(1),"image/webp")}"',body)
body=re.sub(r'href="/[^"#]*(#[^"]*)?"',lambda m:f'href="{m.group(1) or "#"}"',body)
js=open('public/assets/js/site.js').read()
open(OUT,'w').write(f'''<title>Lexora Digital</title>
<meta name="description" content="Lexora Digital homepage preview">
<script>document.documentElement.classList.add("js")</script>
<style>{css}</style>
{body}
<script>{js}</script>''')
print('ok')
