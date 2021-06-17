import express from 'express'
import fileUpload from 'express-fileupload'
import indexRoutes from './routes/index.routes'
import imagesRoutes from './routes/images.routes'
import config from './config'

// Initializations
const app = express()

// Settings
app.set('title', 'react gallery')
app.set('port', process.env.PORT || 5000)

// Middlewares
app.use(fileUpload({
    tempFileDir: '/temp'
}))

// Routes
app.use(indexRoutes)
app.use(imagesRoutes)

// Listen
app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} listening at the port ${app.get('port')}`)
})