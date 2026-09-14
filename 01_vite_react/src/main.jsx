import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const abc = 9827343
const customReactElement = React.createElement(
  'a',{
        href: 'https://www.google.com',
        target : "_blank"
    },"HEllOWORLD",
    abc
) // It is a way to create objrct from the react and using it in the render
createRoot(document.getElementById('root')).render(
   customReactElement
)

/*createRoot(document.getElementById('root')).render(
  
    <App /> // It can be also writteen as App()
  
) */
