const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', function (event) {
  const message = event.data;
  appendMessage(message);
});

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendButton.addEventListener('click', function () {
  const message = messageInput.value.trim();
  if (message !== '') {
    socket.send(message);
    messageInput.value = '';
    appendMessage('Вы: ' + message);
  }
});
