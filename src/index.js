import React from "react"
import ReactDOM from "react-dom"
import css from './wikitags.scss'

import App from './App'
import EntityPage from './components/entity/EntityPage'
import LoginPage from './components/auth/Login'
import CategoryPage from './components/category/CategoryPage'
import HomePage from './components/home/HomePage'
import ListsPage from './components/lists/ListsPage'
import Trends from "./components/trends/Trends"
import Test from "./components/trends/Test"

const body = window.__PRELOADED_STATE__;
const wiki = document.getElementById("wikitags-app");
const comp = wiki.classList.value;

const selectComponents = (component) => {
    switch(component) {
        case 'render-login': 	 return <App><LoginPage body={body}/></App>; break;
        case 'render-home': 	 return <App><HomePage body={body} /></App>; break;
        case 'render-category':  return <App><CategoryPage body={ body}/></App>; break;
        case 'render-entity': 	 return <App> <EntityPage body={ body }/></App>; break;
        case 'render-profile': 	 return <App><ProfilePage /></App>; break;
        case 'render-lists':     return <App><ListsPage body={body}/></App>; break;
        case 'render-trends':    return <App><Trends body={body}/></App>; break;
        case 'render-create': 	 return <div><CreateList /></div>; break;
        case 'render-addtags':   return <div><AddTags /></div>; break;
        case 'render-modifiers': return <div><AddModifiers /></div>; break;
    }
};

ReactDOM.render(selectComponents(comp), document.getElementById("wikitags-app"));