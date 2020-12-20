import './App.css';
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import BountyForm from './components/BountyForm.js'

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties(){
  axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }

  function addBounties(newBounty){
    axios.post("/bounties", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounties(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        console.log("Deleted")
      })
      .catch(err => console.log(err))
  } 

  function editBounties(updates, bountyId) {
    axios.put(`/bounties/${bountyId}` , updates)
      .then(res => {
        console.log(res)
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className="App">
      <BountyForm  submit={addBounties} btnText="Add Bounty" />
      {bounties.map(bounty => <Bounty {...bounty} key = {bounty._id} deleteBounties={deleteBounties} editBounties={editBounties}/>)}
      {/* <button onClick={function test(){console.log(bountyId)}}>Test</button> */}
    </div>
  );
}

export default App;
