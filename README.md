# Spotify API Search using React + Webpack 2

A simple spotify search app built with React.
This is made for a certain purpose and to practice spotify api using reactjs

## Featues
* [react](https://facebook.github.io/react/docs/hello-world.html)
* [webpack 2](https://webpack.js.org/configuration/)
* [babel](https://babeljs.io/docs/setup/)
* [axios](https://www.npmjs.com/package/axios)
* [eslint](http://eslint.org/docs/rules/)
* [stylus](http://stylus-lang.com/docs/selectors.html)

## Requirements
* node `^4.5.0`

Quick Start
-----------

```shell
$ git clone https://github.com/georgeejr/react-webpack.git
$ cd react-webpack
$ npm install
$ npm run dev
```
You can look for the build static files inside **./dist** folder

NPM Commands
------------

|Script|Description|
|---|---|
|npm run dev|Lint, and run webpack development server @ **localhost:8000**|
|npm run prod|Clean, and build webpack production to **./dist**|
|npm run lint|Lint **.js** files|
|npm run clean|Delete **./dist** folder|

## Technology Description 
* Why Webpack 2? Because Webpack is the new javascript module bundler that lets you import files and bundles everything together. So on the page you are just including 1 file and all the necessary parts of your javascript application or site are bundled together into 1 file. Webpack makes your development and production very fast and maintainable.
* Why axios - Axios is a great http client library. It uses promises by default and runs on both the client and the server (which makes it appropriate for fetching data during server-side rendering). And it is the most recommended on all forums when using reactjs or vuejs.
* Why am i recommending stylus - Because of It's clean syntax and the fact it can do everything else that other preprocessors does.
* Why reactjs? - Simply because of its Virtual-DOM feature that makes your application faster.
