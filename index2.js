const express = require("express")
const app = express()

const users = [{
    name: "lavish",
    kidneys : [{
        healthy : false
    }]

}];
app.use(express.json());
app.get("/", function(req, res) {
    const johnkideney = users[0].kidneys
    const noofkidneys = johnkideney.length
    let noofhealtykidney = 0;
    for(let i =0; i<johnkideney.length; i++) {
        if(johnkideney[i].healthy){
        noofhealtykidney = noofhealtykidney+1    
        }
    }
    const noofunhealthyk = noofkidneys-noofhealtykidney;
    
    res.json({
        noofkidneys,
        noofhealtykidney,
        noofunhealthyk
    })
    // res.send("healthy")
})
app.post("/", function(req, res) {
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })
    res.json({
        msg: "done buddy"
    })
})
app.put("/", function(req, res) {
    for(let i =0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg : "kidney replaced successfully"
    })
})
app.delete("/", function(req, res) {
    if(isthereatleastoneubhealthykidney()) {
        const newkidney = [];
    for(let i =0; i<users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newkidney;
    res.json({
        msg:"done"
    })
    }else {
        res.status(411).json({
            msg: "you have no bad kidney" 
        })
    }
    
})
function isthereatleastoneubhealthykidney() {
    let atleastoneunhealthykidney = false;
    for(let i = 0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastoneunhealthykidney = true
        }
    }
    return atleastoneunhealthykidney
}
app.listen(3001);