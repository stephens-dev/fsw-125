import React, {Component, useState, useEffect} from 'react'
import Movie from './components/editMovie.js'
import MovieForm from './components/movieForm.js'
import Axios from 'axios'
import axios from 'axios'


function Movies() {
    const [movies, setMovies] = useState([])
    // const [editToggle, setEditToggle] = useState(false)
    function initPull() {
        Axios.get("/Movies")
                .then(res => {
                    setMovies(res.data)
                }).catch(err => console.log(err))
            }
            useEffect(() => {
                initPull()
            }, [])

        function addMovie(newMovie) {
            if (newMovie.seen === "false") {
                newMovie.seen = false
            }else {newMovie.seen = true}
            axios.post("/Movies",newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies,res.data])})
                .catch(err => console.log(err))
        }
        function deleteMovie(movieId) {
            axios.delete(`/Movies/${movieId}`)
            .then(res => {
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
        }
        function editMovie(updates, movieId) {
            axios.put(`/Movies/${movieId}`, updates)
            .then(res  => {setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            }).catch(err => console.log(err))
        }
        
        return (
            <div>
                <MovieForm submit={addMovie} btnText="Add Movie" />
                {movies.map(movie => <Movie {...movie} key = {movie._id} deleteMovie={deleteMovie} editMovie={editMovie} />)}
            </div>
        )
    }
        // function MovieForm(props) {
        //     const initInputs = {title: props.title || "",
        //                         genre: props.genre || "",
        //                         seen: props.genre || "",
        //                         watched: props.watched || ""}
        //     const [inputs, setInputs] = useState(initInputs)

        //     function handleChange(e) {
        //         const {name, value} = e.target
        //         setInputs(prevInputs => ({...prevInputs, [name]: value}))
        //     }
        //     function handleSubmit(e) {
        //         e.preventDefault()
        //         props.submit(inputs, props._id)
        //         setInputs(initInputs)
        //         if (props.btnText === "Finish Edit") {
        //             props.editToggle(prevToggle => !prevToggle)
        //         }
        //     }
        //     return (
        //         <form onSubmit={handleSubmit}>
        //             <input
        //             type="text"
        //             name="title"
        //             value={inputs.title}
        //             onChange={handleChange}
        //             placeholder="Title" />
        //             <input
        //             type="text"
        //             name="genre"
        //             value={inputs.genre}
        //             onChange={handleChange}
        //             placeholder="Genre" />
        //             <input
        //             type="text"
        //             name="seen"
        //             value={inputs.seen}
        //             onChange={handleChange}
        //             placeholder="Seen" />
        //             <input
        //             type="text"
        //             name="watched"
        //             value={inputs.watched}
        //             onChange={handleChange}
        //             placeholder="Watched" />
        //         </form>
        //     )
        // }

    // function Movie(props) {

    //     return(
    //         <div>
    //             {!editToggle ?
    //             <>
    //             <ul>
    //                 <li>
    //                     Title: {props.title}
    //                 </li>
    //                 <li>
    //                     Genre: {props.genre}
    //                 </li>
    //                 <li>
    //                     Times Seen: {props.seen}
    //                 </li>
    //                 <li>
    //                     Watched: {props.watched.toString()}
    //                 </li>
    //             </ul>
    //             <button onClick={() => props.deleteMovie(props._id)}>Delete</button>
    //             <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
    //             </>
    //             :
    //             <>
    //             <MovieForm
    //             title={props.title}
    //             genre={props.genre}
    //             seen={props.seen}
    //             watched={props.watched}
    //             _id={props._id}
    //             btnText="Finish Edit"
    //             submit={props.editMovie}
    //             editToggle={setEditToggle}
    //             />
    //             <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
    //             </>
    //             }
    //         </div>
    //     )
        
    // }


// class Movies extends Component {
//     constructor() {
//         super()
//         this.state={
//             Movies: []
//         }
//     }

//     componentDidMount() {
//         Axios.get("/movies")
//         .then(res => {
//             console.log(res)
//         }).catch(err => console.log(err))
//     }


//     render() {
//         return(
//         <div>
//             {this.state.Movies}
//         </div>
//         )
//     }
// }

export default Movies