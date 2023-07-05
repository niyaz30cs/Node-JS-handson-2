const express=require("express")

const app=express();

app.get("/api/main",(req,res)=>{
    res.send("<html><body><h1>What is Express js?</h1><h2>Ans:-</h2><p>Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.</p><h3>In otherword:-Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js.</h3></body></html>")
})
app.listen(4000,()=>{
    console.log("server is running on 4000....");
})
