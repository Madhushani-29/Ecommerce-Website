const express=require("express");
const {addUser}=require("../Controllers/user-controller.js");

const router=express.Router();

router.route("/user").get(addUser);

module.exports=router;