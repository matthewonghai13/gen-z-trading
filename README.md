## Inspiration
As a team consisting of mainly Business and CNS majors, we found the theme of cryptocurrency to be the most relatable to our areas of studies. Along with our interest in other areas, we combined together our interests to create TradeZ. The idea behind TradeZ started from creating a cryptocurrency tracker along with other fresh ideas such as computer vision, sentiment analysis, and space as we developed our website.
   
## What it does
TradeZ is a multi-functional platform for cryptocurrency trading for generation Z. It offers live market data for popular cryptocurrencies, investment tips based on horoscopes and user mood, facial recognition and voice analysis to predict user emotion, resources, and a built-in quick safe exit from the worries of trading!

## How we built it
For the front end, we used React and Bootstrap to design an appealing interface for our users. The Google Authentication API was also employed to authenticate and assist in the storage of secure user information. In the back end, we created two neural networks, one for facial and mood recognition and one for voice emotion analysis, using an MLP classifier through sklearn and multi-layer models. Additionally, we used the Cloud Firestore database to store live market data for coins, user transactions, user inventory, trained models, and current/predicted emotions of the clients. We also used the Twilio messaging API to send tailored memes to users depending on their predicted mood, as well as the Aztro API for daily horoscopes to assist in determining ideal tips for investment.

## Challenges we ran into
With a design plan for such a complex platform, we ran into various challenges throughout the duration of the project. When implementing our neural networks, we had trouble figuring out how to approach modeling the networks and extracting distinct features within our datasets. Additionally, we had a significant problem of hosting the back end and storing our trained models online, along with sending audio recordings through requests using bits. We also had issues with package installation and unsupported versions, but we were able to figure it out and continue with the development on the front end. 
                 
## Accomplishments that we're proud of
We are proud of how much overall work we were able to accomplish in a short amount of time, as well as how much we learned together. Our front end, back end, and neural networks all worked really well in the end.

## What we learned
We learned many useful technologies throughout the duration of our project. The Cloud Firestore Database was incredibly easy to learn and employ a robust no-SQL database, facilitating our design/work process. Some of use who were newer to either full stack development or machine learning/neural networks also learned a lot about how to begin and work on these new technologies. We also learned about how to plan effectively for future hackathons and the aspects of projects that should be prioritized first.

## What's next for TradeZ: A GenZ Crypto Trading Platform
We would like to add more features such as additional information such as profits made regarding user transactions, as well as faster network models (predicts per frame) and a way to reduce latency on certain parts of our website. Another feature could be to incorporate more types of cryptocurrencies and other tracking data to really advance our trading platform. An idea we could not incorporate within the time constraints included a voice activated chat bot to be created with our made voice and face sentiment analysis models to give real time investment tips for crypto.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
