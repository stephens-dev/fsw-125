import React, {useState} from 'react'


function BountyForm(props) {
    const initInputs = { firstName: props.firstName || "",
                         lastName: props.lastName || "",
                         Living: props.Living || "",
                         Bounty: props.Bounty || "",
                         Type: props.Type || ""}
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

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            placeholder="First Name" 
            />
             <input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            placeholder="Last Name" 
            />
             <input
            type="text"
            name="Living"
            value={inputs.Living}
            onChange={handleChange}
            placeholder="Living or Dead" 
            />
             <input
            type="text"
            name="Bounty"
            value={inputs.Bounty}
            onChange={handleChange}
            placeholder="Bounty" 
            />
             <input
            type="text"
            name="Type"
            value={inputs.Type}
            onChange={handleChange}
            placeholder="Type" 
            />
            <button className="submit">{props.btnText}</button>
            

        </form>
    )

}

export default BountyForm