const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require("./api")

require("./repositories")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(router)

const PORT = 5000
app.listen(PORT, () => {
    console.log("App is running at "+ PORT);
})