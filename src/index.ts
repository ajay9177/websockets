import { WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8080});

//Event handler
wss.on("connection",function(socket){
    console.log("User connected")
    setInterval(()=>{
        socket.send("Hello"+Math.random());
    },500)

    socket.on("message",(e)=>{
        console.log(e.toString());
    })
})