const addUser=(req, res)=>{
    const {name, password}=req.body;
    if (!name || !password){
        res.status(400);
        throw new Error("Name and Password is a must");
    }
    res.json({name, password});
}

module.exports={addUser};