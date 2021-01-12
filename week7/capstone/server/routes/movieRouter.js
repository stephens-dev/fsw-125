const { getNodeText } = require("@testing-library/react")
const express = require("express")
const moviesRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const movies = [
    {title: "Die Hard", genre: "Action", seen: true, watched: 3, _id: uuidv4() },
    {title: "Conjuring", genre: "Horror", seen: true, watched: 2, _id: uuidv4() },
    {title: "Mulan", genre: "Fantasy", seen: false, watched: 1, _id: uuidv4() },
    {title: "Harry Potter and the Chamber of Secrets", genre: "Fantasy", seen: false, watched: 1, _id: uuidv4() },
    {title: "Star Wars IV", genre: "SIFI", seen: true, watched: 2, _id: uuidv4() },
    {title: "White Chicks", genre: "Comedy", seen: false, watched: 4, _id: uuidv4() }

]

moviesRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase())
    if(!genre) {
        const error = new Error("Must provide a genre")
        res.status(500)
        return next(error)
    }
    res.status(200).send(filteredMovies)
})
moviesRouter.route("/:moviesId")
    .get((req, res, next) => {
        const moviesId = req.params.moviesId
        const foundMovies = movies.find(movie => movie._id === moviesId)
        if(!foundMovies) {
            const error = new Error("Could not be found")
            res.status(500)
            return next(error)
        }
        res.status(200).send(foundMovies)
    })
    .put((req, res) => {
        const movieId = req.params.moviesId
        const updateMovie = req.body
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], updateMovie)
        res.status(201).send(updatedMovie)
    })
    .delete((req, res) => {
        const movieId = req.params.moviesId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.send(`Movie with id of ${movieId} of has been deleted`)
    })
    

moviesRouter.route("/")
    .get((req, res) => {
        res.status(200).send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.status(201).send(newMovie)
    })


    module.exports = moviesRouter