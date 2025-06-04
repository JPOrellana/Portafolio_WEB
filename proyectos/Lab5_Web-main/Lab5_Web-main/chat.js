// Eliminar márgenes predeterminados
document.body.style.margin = '0';

let currentUser = localStorage.getItem('currentUser');
if (!currentUser) {
  currentUser = Math.random().toString(36).substring(2, 10);
  localStorage.setItem('currentUser', currentUser);
}

// Variable global para el tema actual 
let currentTheme = localStorage.getItem('theme') || 'light';

// Funcion para aplicar tema
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#404040';
    document.body.style.color = '#f0f0f0';
    header.style.backgroundColor = '#000000';
    headerGradient.style.background = 'linear-gradient(to bottom, #000000, #404040)';
    messagesContainer.style.backgroundColor = '#404040';
    inputContainer.style.backgroundColor = '#404040';
    sendButton.style.backgroundColor = '#757575';
    sendButton.style.color = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#2ac16a';
    document.body.style.color = '#000000';
    header.style.backgroundColor = '#007934';
    headerGradient.style.background = 'linear-gradient(to bottom, transparent, #2ac16a)';
    messagesContainer.style.backgroundColor = '#2ac16a';
    inputContainer.style.backgroundColor = '#2ac16a';
    sendButton.style.backgroundColor = '#01b15e';
    sendButton.style.color = '#ffffff';
  }
}

// Elementos del chat
const appContainer = document.createElement('div');
appContainer.style.display = 'flex';
appContainer.style.flexDirection = 'column';
appContainer.style.height = '100vh';
appContainer.style.width = '100%';
appContainer.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(appContainer);

const header = document.createElement('div');
header.style.position = 'relative';
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.padding = '10px 0';
header.style.height = '120px';
header.style.width = '100%';

const headerCenter = document.createElement('div');
headerCenter.style.flex = '1';
headerCenter.style.display = 'flex';
headerCenter.style.justifyContent = 'center';
headerCenter.style.alignItems = 'center';

const logo = document.createElement('img');
logo.src = 'img/logo.png';
logo.alt = 'Logo';
logo.style.height = '100px';
logo.style.objectFit = 'contain';
logo.style.marginTop = '-20px';
logo.style.fontwidth = '100px';
headerCenter.appendChild(logo);

const headerRight = document.createElement('div');
headerRight.style.width = '180px';
headerRight.style.flexShrink = '0';
headerRight.style.display = 'flex';
headerRight.style.justifyContent = 'center';
headerRight.style.alignItems = 'center';

const themeButton = document.createElement('button');
themeButton.style.padding = '10px 20px';
themeButton.style.borderRadius = '10px';
themeButton.style.border = 'none';
themeButton.style.fontWeight = 'bold';
themeButton.style.display = 'flex';
themeButton.style.alignItems = 'center';
themeButton.style.cursor = 'pointer';
themeButton.style.outline = 'none';

const themeButtonText = document.createElement('span');
themeButtonText.style.color = '#ffffff';

const themeButtonImg = document.createElement('img');
themeButtonImg.style.width = '30px';
themeButtonImg.style.height = '30px';
themeButtonImg.style.marginLeft = '10px';
themeButtonImg.style.objectFit = 'contain';

function updateThemeButton() {
  if (currentTheme === 'light') {
    themeButtonText.innerText = 'Oscuro';
    themeButtonText.style.fontSize = '20px';
    themeButtonImg.src = 'img/luna.png';
    themeButton.style.backgroundColor = '#00ab49';
    themeButtonText.style.color = '#ffffff';
  } else {
    themeButtonText.innerText = 'Claro';
    themeButtonImg.src = 'img/sol.png';
    themeButton.style.backgroundColor = '#9f9f9f';
    themeButtonText.style.color = '#ffffff';
  }
}

updateThemeButton();
themeButton.appendChild(themeButtonText);
themeButton.appendChild(themeButtonImg);
headerRight.appendChild(themeButton);
header.appendChild(headerCenter);
header.appendChild(headerRight);

const headerGradient = document.createElement('div');
headerGradient.style.position = 'absolute';
headerGradient.style.bottom = '0';
headerGradient.style.left = '0';
headerGradient.style.width = '100%';
headerGradient.style.height = '20px';
headerGradient.style.background = 'linear-gradient(to bottom, transparent, #ffffff)';
header.appendChild(headerGradient);

appContainer.appendChild(header);

const messagesContainer = document.createElement('div');
messagesContainer.style.flex = '0 0 67vh';
messagesContainer.style.overflowY = 'auto';
messagesContainer.style.padding = '10px';
messagesContainer.style.boxSizing = 'border-box';
messagesContainer.style.display = 'flex';
messagesContainer.style.flexDirection = 'column';
messagesContainer.style.backgroundColor = '#ffffff';
appContainer.appendChild(messagesContainer);

const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.padding = '10px';
inputContainer.style.borderTop = '1px solid #ccc';
inputContainer.style.alignItems = 'center';
inputContainer.style.width = '100%';
inputContainer.style.backgroundColor = '#007934';
appContainer.appendChild(inputContainer);

const messageInput = document.createElement('input');
messageInput.type = 'text';
messageInput.placeholder = 'Escribe tu mensaje (máximo 140 caracteres)...';
messageInput.maxLength = 140;
messageInput.style.width = '1370px';
messageInput.style.padding = '20px';
messageInput.style.fontSize = '16px';
messageInput.style.borderRadius = '8px';
inputContainer.appendChild(messageInput);

const sendButton = document.createElement('button');
sendButton.innerText = 'Enviar';
sendButton.style.fontSize = '20px';
sendButton.style.fontWeight = 'bold';
sendButton.style.marginLeft = '15px';
sendButton.style.width = '100px';
sendButton.style.padding = '18px';
sendButton.style.backgroundColor = '#0b6431';
sendButton.style.color = '#ffffff';
sendButton.style.border = 'none';
sendButton.style.borderRadius = '8px';
sendButton.style.transition = 'transform 0.2s ease';
inputContainer.appendChild(sendButton);

sendButton.addEventListener('mouseenter', () => {
  sendButton.style.transform = 'scale(1.05)';
});
sendButton.addEventListener('mouseleave', () => {
  sendButton.style.transform = 'scale(1)';
});

applyTheme(currentTheme);

themeButton.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  updateThemeButton();
  applyTheme(currentTheme);
});

const apiUrl = 'https://chat.devng.online/chats';

function animateMessage(element) {
  element.style.opacity = 0;
  let last = +new Date();
  const tick = function () {
    element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
    last = +new Date();
    if (+element.style.opacity < 1) {
      requestAnimationFrame(tick);
    } else {
      element.style.opacity = 1;
    }
  };
  tick();
}

function createMessageElement(message) {
  const { username, message: text } = message;
  const messageEl = document.createElement('div');
  messageEl.style.marginBottom = '15px';
  messageEl.style.padding = '10px';
  messageEl.style.borderRadius = '15px';
  messageEl.style.maxWidth = '70%';
  messageEl.style.wordWrap = 'break-word';

  if (username === currentUser) {
    messageEl.style.alignSelf = 'flex-end';
    messageEl.style.backgroundColor = currentTheme === 'dark' ? '#4c4c4c' : '#dcf8c6';
  } else {
    messageEl.style.alignSelf = 'flex-start';
    messageEl.style.backgroundColor = currentTheme === 'dark' ? '#1e1e1e' : '#f9f9f9';
  }

  messageEl.innerText = text;
  animateMessage(messageEl);
  return messageEl;
}

async function fetchMessages() {
  try {
    const response = await fetch(apiUrl);
    const messages = await response.json();

    const isAtBottom = Math.abs(messagesContainer.scrollHeight - messagesContainer.scrollTop - messagesContainer.clientHeight) < 10;

    messagesContainer.innerHTML = '';
    messages.forEach(msg => {
      const messageEl = createMessageElement(msg);
      messagesContainer.appendChild(messageEl);
    });

    if (isAtBottom) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
  }
}


async function sendMessage(text) {
  try {
    const payload = { message: text, username: currentUser };
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      await fetchMessages();
    } else {
      console.error('Error al enviar mensaje:', response.statusText);
    }
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
  }
}

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const text = messageInput.value.trim();
    if (text !== '') {
      sendMessage(text);
      messageInput.value = '';
    }
  }
});

sendButton.addEventListener('click', () => {
  const text = messageInput.value.trim();
  if (text !== '') {
    sendMessage(text);
    messageInput.value = '';
  }
});

fetchMessages();
setInterval(fetchMessages, 5000);