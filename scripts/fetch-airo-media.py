"""One-off: copy every Airo media slot into public/airo-assets/images/<slot>.<ext>
so the static site serves the images itself (Airo's server used to redirect)."""
import json, mimetypes, os, sys, urllib.request

preview, token = sys.argv[1], sys.argv[2]
ext_for = {"image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/gif": ".gif"}
manifest = json.load(open("airo-media.json"))
out = {}
for slot, info in manifest.items():
    url = info.get("currentUrl") or ""
    if url.startswith("/"):
        url = f"{preview}{url}?airoShareToken={token}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        ctype = r.headers.get_content_type()
        data = r.read()
    ext = ext_for.get(ctype) or mimetypes.guess_extension(ctype) or ".jpg"
    dest = os.path.join("public/airo-assets/images", slot + ext)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    open(dest, "wb").write(data)
    out[slot] = slot + ext
    print(f"{len(data)//1024:>6} KB  {dest}")
json.dump(out, open("/tmp/nans-media-map.json", "w"))
