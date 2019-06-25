// Make connection
let socket = io.connect('https://who-wants-to-win-bucks-chat.herokuapp.com/');

// Query DOM
let message = document.getElementById('message'),
      name = document.getElementById('name'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback')

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

message.addEventListener('keypress', function() {
    socket.emit('typing', name.value);
})

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
    feedback.innerHTML = ""
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});