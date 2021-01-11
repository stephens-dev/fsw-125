import React, {useState} from 'react'



 function MovieForm(props) {
    const initInputs = {title: props.title || "",
                        genre: props.genre || "",
                        seen: props.genre || "",
                        watched: props.watched || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        if (props.btnText === "Finish Edit") {
            props.editToggle(prevToggle => !prevToggle)
        }
    }
    return (
        <form className="addmovie" onSubmit={handleSubmit}>
            <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Title" />
            <input
            type="text"
            name="genre"
            value={inputs.genre}
            onChange={handleChange}
            placeholder="Genre" />
            <input
            type="number"
            name="seen"
            value={inputs.seen}
            onChange={handleChange}
            placeholder="Seen" />
            <input
            type="text"
            name="watched"
            value={inputs.watched}
            onChange={handleChange}
            placeholder="Watched" />

            <button>{props.btnText}</button>
        </form>
    )
}

export default MovieForm