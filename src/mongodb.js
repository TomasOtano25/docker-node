import mongoose from 'mongoose'

try {
  await mongoose.connect('mongodb://mymongo/tomdb')
} catch (e) {
  console.log(e)
}