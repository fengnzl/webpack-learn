// Test import of a JavaScript function
import { Demo } from './js/demo'

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = Demo()

const app = document.querySelector('#app')
app.append(logo, heading)
