import mongoose from 'mongoose'
const { Schema } = mongoose

const urlSchema = new Schema({
  original_url: {
    type: String,
    required: true
  },
  shortened_url: {
    type: String,
    required: true
  }
})

export default mongoose.model('Url', urlSchema)