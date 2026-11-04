import { createElement,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*

// using object to render

const anotherElement = (
    <a href='https://google.com' target='_blank'>google</a>
)

const anotherUser = "test user"

const reactElement = createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser 
)
*/


createRoot(document.getElementById('root')).render(
  
    <App />
    // anotherElement
    // reactElement
  
)
