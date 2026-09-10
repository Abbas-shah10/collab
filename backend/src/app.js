import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();

// basic configurations

app.use(express.json())
app.use(urlencoded())
app.use(cookieParser())

// cors configurations
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', "PUT", 'POST', "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))


// import routes
import healthRouter from './routes/healthcheck.routes.js'

app.use('/api/v1/healthcheck', healthRouter)

export default app;