![alt text](https://github.com/bornfight-studio/bfs-nextjs-starter/blob/master/cover.jpg?raw=true)

# Bornfight Studio - Next.js starter

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight-studio/bfs-nextjs-starter?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight-studio/bfs-nextjs-starter?style=flat-square)

## Versions

-   Next.js 13.3.0
-   React 18.2.0
-   ReactDOM 18.2.0
-   Node 20.x

## Setup

```bash
nvm use
yarn install
yarn dev
```

### (S)CSS

-   based on **ITCSS** architecture (read about
    it [here](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)) and inspired
    by [inuitcss framework](https://github.com/inuitcss/inuitcss)
-   uses postcss by default - autoprefixer will automatically add vendor prefixes
    by [browserslist ruleset defined inside package.json](https://github.com/postcss/autoprefixer#browsers)

### Scripts

```bash
yarn dev # build and watch file changes for development
yarn build # build for production
yarn start # run the application
yarn lint # lint scss and js files with stylelint
yarn format # format scss and js files with prettier
```

## Favicon generator

https://realfavicongenerator.net/

## License

MIT © [BORNFIGHT STUDIO®](https://www.bornfight.studio)
