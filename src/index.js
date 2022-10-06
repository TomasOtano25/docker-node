import app from './app.js'

import("./mongodb.js")
  .then(() => console.log("MongoDB is connected"))
  .then(() => {
    app.listen(3000)
    console.log("Server runnimg on port 3000")
  })