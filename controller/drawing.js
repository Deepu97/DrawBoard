
export const handleJoinRoom = (socket, room) => {
  socket.join(room);
 
  console.log(`User ${socket.id} joined room ${room}`);
};
export const handleMessage=(socket,data)=>{
 socket.emit("message",data);
}
export const handleStart=(socket,data)=>{
  console.log(data);
  // socket.broadcast.emit("start",data);
  socket.to(data.room).emit("start",data);
}
export const handleMove=(socket,data)=>{
  console.log(data,"move");
  socket.to(data.room).emit("move",data);
 
  // socket.broadcast.emit("move",data);
}
export const handleEnd=(socket,data)=>{
  // socket.emit("end",data)
    socket.to(data.room).emit("end",data)
}
export const handleAddsticker=(socket,data)=>{
  // socket.broadcast.emit("addSticker",data);
   socket.to(data.room).emit("addSticker",data);
}
