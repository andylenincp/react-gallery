import express from 'express'
import indexRoutes from './routes/index.routes'

// Initializations
const app = express()

// Settings
app.set('title', 'react gallery')
app.set('port', process.env.PORT || 5000)

// Middlewares

// Routes
app.use(indexRoutes)

// Listen
app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} listening at the port ${app.get('port')}`)
})