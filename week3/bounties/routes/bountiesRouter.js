const express = require("express")
const bountiesRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const bounties = [
   { firstName: "Darth", lastName: "Skorn", Living: true, bounty: 20200, type: "Sith", _id: uuidv4() },
   { firstName: "Darth", lastName: "Maul", Living: true, bounty: 40000, type: "Sith", _id: uuidv4() },
   { firstName: "Avix", lastName: "Mavr", Living: true, bounty: 8000, type: "Jedi", _id: uuidv4() }
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
    res.send("Updated")
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
        res.send('Added ${newBounty} ')
    })
   


module.exports = bountiesRouter