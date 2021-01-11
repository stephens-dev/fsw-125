const express = require("express")
const tvshowsRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const tvshows = [
    {title: "Game of Thrones", genre: "Fantasy",seen: false, watched: 2, _id: uuidv4()},
    {title: "Supernatural", genre: "Sifi",seen: false, watched: 2, _id: uuidv4()},
    {title: "Arrow", genre: "Action",seen: false, watched: 2, _id: uuidv4()},
    {title: "Clone Wars", genre: "Sifi", _id: uuidv4()},
    {title: "Stargate SG-1", genre: "Sifi",seen: false, watched: 2, _id: uuidv4()},
    {title: "Seal", genre: "Action",seen: false, watched: 2, _id: uuidv4()}

]
// Search by genre //
tvshowsRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredShows = tvshows.filter(show => show.genre.toLowerCase() === genre.toLowerCase())
    res.send(filteredShows)
})
// Interact by Id //
tvshowsRouter.route("/:tvshowsId")
    .get((req, res) => {
        const tvshowId = req.params.tvshowsId
        const foundtvshow = tvshows.find(tvshow => tvshow._id === tvshowId)
        res.send(foundtvshow)
    })
    .put((req, res) => {
    const tvshowId = req.params.tvshowsId
    const updatetvshow = req.body
    const tvshowIndex = tvshows.findIndex(tvshow => tvshow._id === tvshowId)
    const updatedtvshow = Object.assign(tvshows[tvshowIndex], updatetvshow)
    res.send(`${updatedtvshow.title} Has been Updated`)
    })
    .delete((req, res) => {
        const tvshowId = req.params.tvshowsId
        const tvshowIndex = tvshows.findIndex(tvshow => tvshow._id === tvshowId)
        tvshows.splice(tvshowIndex, 1)
        res.send(`The Show with id of ${tvshowId} has been Deleted`)
    })
// General interaction //
tvshowsRouter.route("/")
    .get((req, res) => {
        res.send(tvshows)
    })
    .post((req, res) => {
        const newTvShow = req.body
        newTvShow._id = uuidv4()
        tvshows.push(newTvShow)
        res.send(`${newTvShow.title} Has been Added`)
    })

    module.exports = tvshowsRouter