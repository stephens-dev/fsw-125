const express = require("express")
const bountiesRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const bounties = [
   { firstName: "Darth", lastName: "Skorn", Living: true, bounty: 20200, type: "Sith", _id: uuidv4() },
   { firstName: "Darth", lastName: "Maul", Living: true, bounty: 40000, type: "Sith", _id: uuidv4() },
   { firstName: "Avix", lastName: "Mavr", Living: true, bounty: 8000, type: "Jedi", _id: uuidv4() }
]


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