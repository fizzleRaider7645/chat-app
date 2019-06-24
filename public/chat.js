
// Make connection
let socket = io.connect('http://localhost:4000');

// Query DOM
let message = document.getElementById('message'),
      name = document.getElementById('name'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

// Emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
      message: message.value,
      name: name.value
  });
  message.value = "";
});

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
});