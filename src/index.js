import express from 'express'
import { router } from './routes/routes.js'
import {PORT} from '../config/config.js'
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression'

const app = express();

// Middleware compression

app.use(compression())


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.static('public'))

//con static bootstrap
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))
app.use('/lazysizes', express.static('node_modules/lazysizes/'))


app.use('/', router);

app.listen(PORT, () => {
   console.log(`Server is runnig on port http://localhost:${PORT}`)
})

