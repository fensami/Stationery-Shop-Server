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

## Path Use Case

### http://localhost:5000/api/products Using post mathod.When hit this path and then create a product data

```
{
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true
}
```

### http://localhost:5000/api/products Using Get Mathod . When hit this path the show all data.
