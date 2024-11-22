# Project Setup Important Links

## Node Js installation

```
npm init
npm add -D @types/node
npm add -D nodemon
```

## Express js installation

```
npm add express
npm i --save-dev @types/express

```

## Typescript installation

```
tsc --init
npm install typescript --save-dev
```

## then change tsconfig.js file rootdir and outdir Configuar Vercel File create a vercel.json file then using the code

```
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js"
    }
  ]
}
```

## Install vercel CLI Then login the vercel Cmd deploy pross

```
npm i -g vercel
vercel login
vercel --prod
```
