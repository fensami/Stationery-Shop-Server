# Stationery Shop Server

## Important Information

```
Server Live Link : https://stationery-shop-server-xi.vercel.app/
Client  Live Link :https://stationery-shop-client-seven.vercel.app/

Admin Id & Pass : id: admin1@gmail.com || Pass: admin123

Github Server Link : https://github.com/fensami/Stationery-Shop-Server
Github Client Link : https://github.com/fensami/Stationery-Shop-Client

video Link :  https://drive.google.com/file/d/1Z9b1P45Ig1MAQY3Ims05xx6x6-HQONqc/view?usp=drive_link
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
