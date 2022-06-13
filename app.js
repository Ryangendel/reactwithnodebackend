const express = require("express")
const app = express()

const path = require("path")

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV ==="production"){
    app.use(express.static("build"))
    app.get("*", (req, res)=>{
        console.log("YOU HIT THIS ROUTE")
        res.sendFile(path.resolve(__dirname, "build", "index.html"))
    })
}

app.listen(PORT, ()=>{
    console.log("listening on port "+ PORT)
})