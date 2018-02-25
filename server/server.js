'use strict';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('USER CONNECTED');

  socket.on('disconnect', function(){
    console.log('USER DISCONNECTED');
  });

  socket.on('add-message', (message) => {
    //message='testing '+message;
    setInterval(function(){ 
      message={'name':'test'+Math.floor(Math.random() * 20),'val':Math.floor(Math.random() * 20)}
      io.emit('message', {type:'new-message', text: message}); 
    }, 3000);
    
  });
});

http.listen(8084, () => {
  console.log('started on port 8080');
});
