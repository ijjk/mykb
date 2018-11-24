# MYKB

> A file system/markdown based knowledge base editor/viewer 

## Demo

You can try the demo at: https://mykb.jjsweb.site

\- Login  
email: admin  
password: secretpass

P.S. the demo is reset every 10 minutes

## About

MYKB is a file system/markdown based knowledge base editor/viewer built with [Next.js](https://github.com/zeit/next.js)

Current features:

- live preview when editing a doc
- live file system watching
- caching of docs to speed up searching/viewing of docs
- offline viewing of cached docs (requires browser that supports service workers)
- automatic git versioning
- automatic trusting of Cloudflare reverse proxies

## Installing 

- With Docker
    ```
    docker run --name mykb -v /path/to/docs:/kb -v /path/to/config:/config --env "PUID=USER_ID" --env "PGID=GROUP_ID" -p 3000:3000 ijjk/mykb:latest
    ```

- With yarn (or npm)

    1. Clone repo
        ```
        git clone https://github.com/ijjk/mykb
        ```
    2. Install dependencies
        ```
        cd path/to/mykb; yarn
        ```
    3. Build it
        ```
        yarn build && NODE_ENV=production node ./bin/genSecret.js
        ```
    4. Start it
        ```
        yarn start
        ```

## Options

production.json (overrides default.json with production NODE_ENV var) 

| Name | Description |
| ---- | ----------- |
| useGit | Whether or not to use a git repo to automatically version changes to docs (requires git to be installed) |
| docsDir | The directory where the markdown docs are located |
| cacheSize | Max size of docs to store in memory for faster searching (default 10MB) |
| trustCloudflare | Whether to trust X-Forwarded-For header from Cloudflare IPs (used for rate limiting) |

trustIPs.json - An array of [proxy-addr](https://www.npmjs.com/package/proxy-addr) compatible addresses to trust the X-Forwarded-For header from (Only needed if behind reverse proxy)

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
