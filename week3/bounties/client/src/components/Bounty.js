import React, {useState} from 'react'
import BountyForm from './BountyForm.js'

function Bounty(props){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="displayItems">
            {!editToggle ?
            <>
        <ul>
            <li>
                First Name: {props.firstName}
            </li>
                <li>
                    Last Name: {props.lastName}
                </li>
            <li>
                Living: {props.Living.toString()}
            </li>
                <li>
                    Bounty: {props.Bounty}
                </li>
            <li>
                Type: {props.Type}
            </li>
        
            
        </ul>
            <button className="delete" onClick={() => props.deleteBounties(props._id)}>Delete</button>
            <button className="edit" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <BountyForm
                firstName={props.firstName}
                lastName={props.lastName}
                Living={props.Living}
                Bounty={props.Bounty}
                Type={props.Type}
                _id={props._id}
                btnText="Finish Edit"
                submit={props.editBounties}
                editToggle={setEditToggle}
            />
            <button className="cancel" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
            </>
            }           
        </div>
    )
}

export default Bounty