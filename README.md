![alt text](https://github.com/bornfight-studio/bfs-nextjs-starter/blob/master/cover.jpg?raw=true)

# Bornfight Studio - Next.js starter

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight-studio/bfs-nextjs-starter?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight-studio/bfs-nextjs-starter?style=flat-square)

## Versions

-   Next.js 14.1.3
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

## Custom hooks

| useAccordion                                                                                          |
| ----------------------------------------------------------------------------------------------------- |
| opens and close accordion item                                                                        |
| `JS const { clickAction, openedFlag } = useAccordion({ expandableWrapper, expandableInnerContent });` |

| useCreatePortalInBody                                         |
| ------------------------------------------------------------- |
| creates portal                                                |
| `JS const children = useCreatePortalInBody( name, element );` |

| useCurrentRefs                               |
| -------------------------------------------- |
| returns object with array of passed refs     |
| `JS const refs = useCurrentRefs( items[] );` |


&nbsp;

#### - useInterval -

creates react compliant `setInterval()`

```bash
const interval = useInterval( callback(), delay, deps );
```

&nbsp;

#### - useIsMobile -

returns a boolean if the resolution si smaller/larger than the passed breakpoint

```bash
const isMobile = useIsMobile( breakpoint );
```

&nbsp;

#### - useIsTouchDevice -

checks the device has touch and returns a boolean

```bash
const isTouchDevice = useIsTouchDevice( );
```

&nbsp;

#### - useMouse -

returns mouse event props

```bash
const mouseMoveDate = useMouse( );
```

&nbsp;

#### - useOutsideClick -

tracks click event outside the element

```bash
const clickOutside = useOutsideClick( ref, handler(), options{} );
```

&nbsp;

#### - usePreviousDifferent -

checks if previous value is different then current

```bash
const isPreviousValueDifferent = usePreviousDifferent( currentValue );
```

&nbsp;

#### - useTriggerWindowResize -

window custom resize event

```bash
const customWindowResize = useTriggerWindowResize( );
window.addEventListener('resize', () => { ... })
```

&nbsp;

#### - useWindowResize -

window resize event

```bash
const windowResize = useWindowResize( callback() );
```

&nbsp;

#### - useWindowScrollPosition -

returns window scroll position

```bash
const scrollPosition = useWindowScrollPosition( ) // { scrollX, scrollY };
```

&nbsp;

#### - useWindowSize -

returns window size

```bash
const windowSize = useWindowSize( ) // { width, height };
```

## Favicon generator

https://realfavicongenerator.net/

## License

MIT © [BORNFIGHT STUDIO®](https://www.bornfight.studio)
