const express = require('express')
const app = express()
const port = 3002
import {UserInput} from "common"

app.use(express.json())

app.post('/',(req:any, res:any)=>{
    let parsedUser = UserInput.safeParse(req.body)
    if(!parsedUser.success){
        res.send("Incorrect input!")
        return;
    }
    res.send("Correffct input!")

})

app.listen(port,() => {
    console.log(`Example app is listening to port ${port}`)
})