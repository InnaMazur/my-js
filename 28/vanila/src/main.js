import './style.css'
import { createCounter } from './counter.js'

const app = document.getElementById('app')


const counter = createCounter()
app.appendChild(counter)