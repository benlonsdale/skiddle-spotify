This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firstly

Pull down a copy of the application and run npm install.
You will need to install this chrome extension to get around cross-origin issues: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

## Available Scripts
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Commentary

### Description

This project is a small, mobile responsive application which integrates with both the Spotify and Skiddle APIs to find events with available tickets for you favourite bands.

## Technologies
### React Hooks
You will notice that there are no class components used in this application, no component life cycle methods, this is because it has been built using the upcoming `16.7.0-alpha` version of react which implements `react hooks`. This version of react represents a huge change in the way that react components share logic and from the example I have provided you will see that the code looks very different to the current react best practices. These best practices will be re-evaluated and reset when this up coming release hits stable (scheduled for some time in early 2019).

I chose to use this version of react, for two reasons; firstly I wanted to demonstrate exactly how up to date I keep with the react ecosystem and secondly, I am looking forward to this new way of working with react. The direction that react is heading in is very exciting, the core team are very communicative and open to having discussions with the wider community, but we only benefit from those at the very top of the tree if we keep up to date.

### Redux
I chose to use redux to handle validation tokens which allows you to access the global reducer state from anywhere in the application. I could have also used the new react `context` api which also allows elements of state to be accessed from different places in the application.

### Styled Components
Styled components was used as a way to ensure that where ever a component is used in the application, it will have the correct appearance without the need for overly complex style sheets and class names.

### Axios
Axios is used as a convenience tool, as when using the browser native `fetch()` api, handling a json response is a two step process, where axios automatically parses json responses into objects.

### React router
React router was used as it is a popular routing library that i am familiar with, although other routing libraries are available