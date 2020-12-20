const express = require("express")
const bountiesRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const bounties = [
   { firstName: "Darth", lastName: "Skorn", Living: true, Bounty: 20200, Type: "Sith", _id: uuidv4() },
   { firstName: "Darth", lastName: "Maul", Living: true, Bounty: 40000, Type: "Sith", _id: uuidv4() },
   { firstName: "Avix", lastName: "Mavr", Living: true, Bounty: 8000, Type: "Jedi", _id: uuidv4() }
]
bountiesRouter.route("/:bountiesId")
.get((req, res) => {
    const bountiesId = req.params.bountiesId
    const foundBounties = bounties.find(bounty => bounty._id === bountiesId)
    res.send(foundBounties)
})
.put((req, res) => {
    const bountyId = req.params.bountiesId
    const updateBounty = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateBounty)
    res.send(updatedBounty)
})
.delete((req, res) => {
    const bountyId = req.params.bountiesId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Deleted")
})


bountiesRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })
   


module.exports = bountiesRouter