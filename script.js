var messageTemplate = document.querySelector('#message-template').content;
var newchatMessage = messageTemplate.querySelector('.chat-message');
var newMessageText = document.querySelector('.chat-form-input');
var chatForm = document.querySelector('.chat-form');
var chat = document.querySelector('.chat-content');
var messages = chat.children;


chatForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var message = newchatMessage.cloneNode(true);
    
    var text = newMessageText.value;
    var messageText = message.querySelector('.chat-message-text');
    messageText.textContent = text;
    
    
    chat.appendChild(message);
    newMessageText.value = '';
    addDeletekHandler(message);
});

var addDeletekHandler = function (message) {
  var deleteMessage = message.querySelector('.chat-message-button');
  deleteMessage.addEventListener('click', function () {
    message.remove();
    
    
  });
};

for (var i = 0; i < messages.length; i++) {
  addDeletekHandler(messages[i]);
}