import os, json, time, base64, urllib.request

TOK = os.environ.get("VERCEL_TOKEN")
TEAM = "team_zFatsKhvH59PqPerC30g04cQ"
INCLUDE_DIRS = ["src", "public", "content"]
INCLUDE_FILES = ["package.json", "package-lock.json", "next.config.ts",
                 "tsconfig.json", "postcss.config.mjs", "eslint.config.mjs"]

def main():
    files = []
    for d in INCLUDE_DIRS:
        for dirpath, _, names in os.walk(d):
            for n in names:
                p = os.path.join(dirpath, n)
                rel = os.path.relpath(p, ".").replace("\\", "/")
                with open(p, "rb") as f:
                    raw = f.read()
                entry = {"file": rel}
                try:
                    entry["data"] = raw.decode("utf-8")
                    raw.decode("utf-8")
                except UnicodeDecodeError:
                    entry["encoding"] = "base64"
                    entry["data"] = base64.b64encode(raw).decode()
                files.append(entry)
    for n in INCLUDE_FILES:
        with open(n, "rb") as f:
            files.append({"file": n, "data": f.read().decode("utf-8")})
    print("files:", len(files), flush=True)

    payload = {"name": "omaha-rv-cleaning", "files": files, "target": "production",
               "projectSettings": {"framework": "nextjs"}}
    req = urllib.request.Request(
        "https://api.vercel.com/v13/deployments?teamId=%s&skipAutoDetectionConfirmation=1" % TEAM,
        data=json.dumps(payload).encode(),
        headers={"Authorization": "Bearer " + TOK, "Content-Type": "application/json"},
        method="POST")
    with urllib.request.urlopen(req, timeout=110) as r:
        dep = json.load(r)
    did = dep["id"]
    print("DEPLOYMENT:", did, dep.get("url"), flush=True)

    req2 = urllib.request.Request(
        "https://api.vercel.com/v13/deployments/%s?teamId=%s" % (did, TEAM),
        headers={"Authorization": "Bearer " + TOK})
    for _ in range(40):
        time.sleep(12)
        with urllib.request.urlopen(req2, timeout=30) as r2:
            s = json.load(r2).get("readyState")
        print(s, flush=True)
        if s in ("READY", "ERROR", "CANCELED"):
            break

if __name__ == "__main__":
    main()
