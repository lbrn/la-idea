# LA IDea website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## quick start:

- deploy:
	- yarn install && yarn build (deploy the build folder)
- local development:
	- yarn install && yarn start

## Key project dependencies

- Typescript: Typesafe JS (https://www.typescriptlang.org/)
- React: Framework/UI Library (https://reactjs.org/)
- Material UI: Styled react components (https://material-ui.com/)
- JSS: Material UI uses this for styling.  If you need to write custom css at some point, read up on this. (https://cssinjs.org/?v=v10.3.0)
- React router: Routing (https://reactrouter.com/web/guides/quick-start)
- Dayjs: a lightweight date util library (very similar to momentjs) (https://day.js.org/)
-ESLint: dev dependency to lint your code (https://eslint.org/)
-Prettier: code formatting (https://prettier.io/)

## Maintenance guide

- theming: all colors (with the exception of the cookie consent banner) should be pulled from /src/theme/theme.ts
- data updates: add data to /src/data/cardData.ts.
	- If you need to extend/modify the data format, change it in src/types/card.ts