let messageTemplate = document.querySelector('#message-template').content;
let newchatMessage = messageTemplate.querySelector('.chat-message');
let newMessageText = document.querySelector('.chat-form-input');
let chatForm = document.querySelector('.chat-form');
let chat = document.querySelector('.chat-content');
let messages = chat.children;


chatForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let message = newchatMessage.cloneNode(true);
    
    let text = newMessageText.value;
    let messageText = message.querySelector('.chat-message-text');
    messageText.textContent = text;
    
    
    chat.appendChild(message);
    newMessageText.value = '';
    addDeletekHandler(message);
});

let addDeletekHandler = function (message) {
  let deleteMessage = message.querySelector('.chat-message-button');
  deleteMessage.addEventListener('click', function () {
    message.remove();
    
    
  });
};

for (let i = 0; i < messages.length; i++) {
  addDeletekHandler(messages[i]);
}