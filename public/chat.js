
// Make connection
let socket = io.connect('http://localhost:4000');

// Query DOM
let message = document.getElementById('message'),
      name = document.getElementById('name'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

// Emit events
/* For click on send button*/
btn.addEventListener('click', function(){
    if(message.value === "" || name.value === "") {
        alert('Enter Name and Message')
        return
    }
  socket.emit('chat', {
      message: message.value,
      name: name.value
  });
  message.value = "";
});
/* For Enter keypress*/
document.addEventListener('keypress', function(e){
    if(e.key === "Enter") {
        if(message.value === "" || name.value === "") {
            alert('Enter Name and Message')
            return
        }
    socket.emit('chat', {
        message: message.value,
        name: name.value
    });
    message.value = "";
    }
});

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
});