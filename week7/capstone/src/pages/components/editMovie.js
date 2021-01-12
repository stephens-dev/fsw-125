import React, {useState} from 'react'
import MovieForm from './movieForm.js'


function Movie(props) {
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div class="display">
            {!editToggle ?
            <>
            <ul >
                <li>
                    Title: {props.title}
                </li>
                <li>
                    Genre: {props.genre}
                </li>
                <li>
                    Times Seen: {props.seen.toString()}
                </li>
                <li>
                    Watched: {props.watched
                    // .toString()
                    }
                </li>
            </ul>
            <div className="buttons">
            <button onClick={() => props.deleteMovie(props._id) }>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </div>
            </>
            :
            <>
            <MovieForm 
            title={props.title}
            genre={props.genre}
            seen={props.seen}
            watched={props.watched}
            _id={props._id}
            btnText="Finish Edit"
            submit={props.editMovie}
            editToggle={setEditToggle}
            />
            <button className="cancel"onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
            </>
            }
        </div>
    )
    
}

export default Movie