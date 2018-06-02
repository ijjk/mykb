# MYKB

> A file system/markdown based knowledge base editor/viewer 

## Demo

You can try the demo at: https://mykb.jjsweb.site

\- Login  
email: notadmin  
password: secretpass

P.S. the demo is reset every 10 minutes

## About

MYKB is a simple file system/markdown based knowledge base editor/viewer built with [Feathers](http://feathersjs.com) and [Next.js](https://github.com/zeit/next.js)

Current features:

- live preview when editing a doc
- live file system watching
- caching of docs to speed up searching/viewing of docs
- automatic git versioning
- automatic trusting of cloudflare reverse proxies

## Installing 

Getting up and running is as easy as 1, 2, 3

1. Clone repo
    ```
    git clone https://github.com/ijjk/mykb
    ```
2. Install dependencies (omit `--prod` if developing)
    ```
    cd path/to/mykb; npm i --prod
    ```
3. Start it
    ```
    npm start
    ```

## Options

host.json

| Name | Description |
| ---- | ----------- |
| host | The host to listen on |
| port | The port to listen on |
| pathPrefix | Used to prefix all urls for reverse proxies | 

production.json (overrides default.json with production NODE_ENV var) 

| Name | Description |
| ---- | ----------- |
| useGit | Whether or not to use a git repo to automatically version changes to docs (requires git to be installed) |
| docsDir | The directory where the markdown docs are located |
| cacheSize | Max size of docs to store in memory for faster searching (default 7.5MB) |
| trustCloudflare | Whether to trust X-Forwarded-For header from cloudflare IPs (used for rate limiting) |

If using git the `user.email` and `user.name` configs need to be set either globally or on the docs repo

trustIPs.json - An array of [proxy-addr](https://www.npmjs.com/package/proxy-addr) compatible addresses to trust the X-Forwarded-For header from (Only needed if behind reverse proxy)

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run

## Linting

Lint just react stuff
```
npm lint:react
```

Lint just server stuff
```
npm lint:node
```

Lint both
```
npm lint
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
