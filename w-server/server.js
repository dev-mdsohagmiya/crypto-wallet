const app = require("./app/app");
const dotenv = require("dotenv")
dotenv.config()


const http = require("http")
const server = http.createServer(app)

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000
const URL = process.env.URL

main().then(()=>{
    console.log("database connected")
    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`)
    })
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
}

