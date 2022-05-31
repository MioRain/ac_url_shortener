import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB ERROR!')
})

db.once('open', () => {
  console.log('MongoDB connected!')
})

export default db