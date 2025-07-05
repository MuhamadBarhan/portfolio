import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Helmet } from "react-helmet";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
        <title>Muhamad Barhan | Full Stack Developer Portfolio</title>
        <meta name="description" content="Explore Barhan's projects, skills, and experience as a full stack developer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-portfolio.vercel.app/" />
      </Helmet>
    <App />
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

