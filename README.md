# typed-mxgraph-example-bundled-with-rollup

Example of Typescript application using the mxGraph and [typed-mxgraph](https://github.com/typed-mxgraph/typed-mxgraph) npm packages and bundled with Rollup

Created from the [rollup-starter-app](https://github.com/rollup/rollup-starter-app) template, commit [3a67308](https://github.com/rollup/rollup-starter-app/tree/3a67308dc65f2ccd9cbc3e2ce5e3144c304ab1e9)


## Getting started

### Setup

Ensure you are using Node 16 (this is the tested version, it may work with other versions without guarantee)

If you are using `nvm`, run
```shell
nvm install 16
nvm use 16
```

Clone this repository and install its dependencies:

```shell
git clone https://github.com/typed-mxgraph/typed-mxgraph-example-bundled-with-rollup.git
cd typed-mxgraph-example-bundled-with-rollup
npm install
```

### Running the project

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`.
The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.ts` and including all its dependencies,
including `mxGraph`.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to http://localhost:3000/.

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
