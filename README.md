## GitHub Repository

```
https://github.com/fensami/Stationery-Shop
```

## Live Deployment

```
https://stationery-shop-umber.vercel.app/
```

## Video Explanation (Public Link)

```
https://drive.google.com/file/d/1HDP6pBRvmhfvMg5-aTKHPmE5r7D22hxn/view?usp=drive_link
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

# API Path Use Case

## You can using this link instead of http://localhost:5000

### https://stationery-shop-umber.vercel.app/

### http://localhost:5000/api/products Using post mathod.When hit this path and then create a product data

### You can use this bottom data example

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

### http://localhost:5000/api/products?name=Notebook Using Get Mathod . when hit this paht show the all Notebook

### http://localhost:5000/api/products/67432fd7c02e7728a4a031d5 Using Get Mathod. This is an example product id. You can use another id to all data .

### http://localhost:5000/api/products?name=Pen
