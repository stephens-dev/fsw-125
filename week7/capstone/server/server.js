const express = require("express")
const app = express()
// const cors = require('cors')


app.use(express.json())

// app.use(cors())

// var corsOptions = {
//     origin: 'localhost:9000/Movies',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})