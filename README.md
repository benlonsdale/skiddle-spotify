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

## Description

This project is a small, mobile responsive application which integrates with both the Spotify and Skiddle APIs to find events with available tickets for you favourite bands.

### What is missing?
Unfortunately I only have had a few hours availavle to work on this project today, so there are a couple of fundamental issues

- Failed api requests, the app doesn't handle when your spotify token becomes invalidated. Currently you will need to go into your dev tools, onto the `Application` tab, delete the `spotifyToken` and then refresh the app. Obviously this isn't the workflow that I would publish the app with
- Pagination: although the APIs are paginated, the front end isn't. The app is built to be able to handle it, the controls have not yet been added
- Testing: there are no unit tests or automated acceptance tests for this application. This is something that given more time i would have wanted to add here.
- Gig details screen: I didn't get chance to add a gig details screen but there would be another step in the app showing dates, times, locations etc.

### How would I extend this?
There are a couple of ideas I have had for extending the functionality of this app.
- Firstly, it would allow people to actually book tickets where they are available.
- Maybe give the user some filters to let them only see bands or events where there are tickets available
- After booking tickets for a band it would be a nice feature to have an option to `Go get hyped` or something, that then linked the user back to their spotify and loaded up the top tracks for the artist they just booked tickets for.

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