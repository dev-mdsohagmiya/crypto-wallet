
const express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const router = require("../route/router");
const app = express()
app.use(express.json(),cors(),morgan("dev"))
//router,
app.use(router)






module.exports  = app