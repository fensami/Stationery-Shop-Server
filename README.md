# Stationery Shop Server

## GitHub Repository

```
https://github.com/fensami/Stationery-Shop-Server
```

## Live Deployment

```

```

## Video Explanation (Public Link)

```

```

Professional README file with features of your application and instructions on setting up the project locally.

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

## intall eslint and prettier

```
https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg
```

## Install vercel CLI Then login the vercel Cmd deploy process

```
npm i -g vercel
vercel login
vercel --prod
```

## Install Ts Node Dev & Run this command line

```
npm i ts-node-dev
ts-node-dev --respawn --transpile-only server.ts

```

## Dotenv install cmd

```
npm i dotenv
```

## Install Mongoose cmd

```
npm install mongoose --save
```

## Cors Install Link

```
npm i cors
npm i --save-dev @types/cors
```

## Zod Install Link

```
npm i zod
npm i --save-dev @types/cors
```

# API Path Use Case
