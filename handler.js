import Minimize from "minimize"
import React from "react"
import ReactDOMServer from "react-dom/server"
// components
import Login from "./src/components/auth/Login"
import Home from "./src/components/home/HomePage"
import Category from "./src/components/category/CategoryPage"
import Entity from "./src/components/entity/EntityPage"
import Profile from "./src/components/profile/ProfilePage"
import ListPage from "./src/components/lists/ListsPage"
import CreateList from "./src/components/user/CreateList"
import AddTags from "./src/components/user/AddTags"
import AddModifiers from "./src/components/user/AddModifiers"
import Trends from "./src/components/trends/Trends"

const cdn = process.env.NODE_ENV === "dev"
    ? `http://localhost:8081/wikitags.bundle.js`
    : `http://distribution.wikitags.com/wikitags.bundle.js`;
const css = process.env.NODE_ENV === "dev"
    ? `http://localhost:8081/wikitags.css`
    : `http://distribution.wikitags.com/wikitags.css`;

if (!global._babelPolyfill) {
    require("babel-polyfill");
}

const html = (Component, comp, data) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        	<title>WikiTags</title>
        	<meta charset="UTF-8">
        	<meta name="viewport" content="width=device-width, initial-scale=1">
        	<meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="author" content="WikiTags.com">
            <meta name="description" content="We rank what people are talking about.">
            <meta name="revisit-after" content="7 days">
            <link href="https://www.wikitags.com/" rel="canonical" />
            <meta name="twitter:card" content="summary">
            <meta name="twitter:site" content="@wikitags">
            <meta name="twitter:creator" content="@wikitags">
            <meta name="twitter:title" content="WikiTags">
            <meta name="twitter:description" content="We rank what people are talking about.">
            <meta name="twitter:image:src" content="https://distribution.wikitags.com/imgs/wikitags-twitter.jpg">
            <meta property="og:locale" content="en_US">
            <meta property="og:type" content="app">
            <meta property="og:site_name" content="WikiTags">
            <meta property="og:title" content="WikiTags | We rank what people are talking about.">
            <meta property="og:image" content="https://distribution.wikitags.com/imgs/wikitags-twitter.jpg">
            <meta property="og:url" content="https://www.wikitags.com/">
            <meta property="og:description" content="We rank what people are talking about.">

            <link rel="icon" href="http://distribution.wikitags.com/imgs/favicon.ico">
        	<link href=${css} rel="stylesheet">
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
            <script src="https://wikitags.com/js/googlecharts.min.js"></script>
        </head>
        <body>
            <div id="wikitags-app" class="render-${comp}">
                ${Component}
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
            <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(data).replace(/</g, '\\u003c')}
            </script>
            <script src=${cdn}></script>
        </body>
        </html>`;
};

const getComponent = (component, body) => {
    // console.log('getComponent', body);
    switch (component) {
        case "login":
            return ReactDOMServer.renderToStaticMarkup(<Login />);
            break;
        case "home":
            return ReactDOMServer.renderToStaticMarkup(<Home body={body}/>);
            break;
        case "category":
            return ReactDOMServer.renderToStaticMarkup(<Category body={body}/>);
            break;
        case "entity":
            return ReactDOMServer.renderToStaticMarkup(<Entity body={body}/>);
            break;
        case "lists":
            return ReactDOMServer.renderToStaticMarkup(<ListPage body={body}/>);
            break;
        case "profile":
            return ReactDOMServer.renderToStaticMarkup(<Profile />);
            break;
        case "create":
            return ReactDOMServer.renderToStaticMarkup(<CreateList />);
            break;
        case "addtags":
            return ReactDOMServer.renderToStaticMarkup(<AddTags />);
            break;
        case "modifiers":
            return ReactDOMServer.renderToStaticMarkup(<AddModifiers />);
            break;
        case "trends":
            return ReactDOMServer.renderToStaticMarkup(<Trends body={body}/>);
            break;
    }
};

const renderComponent = (event, context, cb, comp) => {
    const data = event.body;
    // console.log(`handler.js event body:`, comp);
    const component = getComponent(comp, data);
    const content = new Minimize().parse(html(component, comp, data));
    const prom = new Promise((resolve, reject) => resolve("success"));
    prom.then(r => cb(null, content)).catch(e => cb(e));
};

export const login = (event, context, cb) =>
    renderComponent(event, context, cb, "login");

export const home = (event, context, cb) =>
    renderComponent(event, context, cb, "home");

export const category = (event, context, cb) =>
    renderComponent(event, context, cb, "category");

export const entity = (event, context, cb) =>
    renderComponent(event, context, cb, "entity");

export const lists = (event, context, cb) =>
    renderComponent(event, context, cb, "lists");

export const profile = (event, context, cb) =>
    renderComponent(event, context, cb, "profile");

export const create_list = (event, context, cb) =>
    renderComponent(event, context, cb, "create");

export const add_tags = (event, context, cb) =>
    renderComponent(event, context, cb, "addtags");

export const add_modifiers = (event, context, cb) =>
    renderComponent(event, context, cb, "modifiers");

export const trends = (event, context, cb) =>
    renderComponent(event, context, cb, "trends");