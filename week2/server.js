const express = require("express")
const app = express()

const mexicanFood = [
    { "taco": "medium difficulty", "faqitas": "hard difficulty", "burritos": "easy difficulty" }
]
   const cajunFood = [
{cajun: "gumbo ,red beans & rice, spicy peanuts"}]
    const italianFood = [
    {italian: "shimp scampi, lasagna, spagetti"}
    ]



app.get("/mexicanFood",  (req, res) => {
    res.send(mexicanFood)
})
app.get("/cajunFood",  (req, res) => {
    res.send(cajunFood)
})
app.get("/italianFood",  (req, res) => {
    res.send(italianFood)
})

app.listen(9000, () => {
    console.log("server is up")
})