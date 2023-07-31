const express = require("express");
const cors = require("cors");
const {default: axios} = require("axios")

const app = express();
app.use(express.json());
app.use(cors({origin : true}));

app.post("/authenticate", async(req,res)=>{
    const {username} = req.body;
    
    try{
    const r = await axios.put(
    'https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-key":"f38c3ccc-ddfb-4eef-a240-7ffd04b76a88"}}
    );
    return res.status(r.status).json(r.data)
    }catch(e){
    return res.status(r.status).json(r.data)
    }
    
    return res.json({username: username, secret: "sha256..."})
});

app.listen(3000);