import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Layout } from './Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
)
