const websocket = new WebSocket("ws://localhost:8080");

const chat_section = document.getElementById('chat-section');
const msger_chat = document.getElementById("msger-chat-id");
const msger_send_btn = document.getElementById("msger-send-btn-id");
const msger_input = document.getElementById("msger-input-id");
const modal_part = document.getElementById('nameModal');
const save_name_btn = document.getElementById('save-name-btn');
const modal_input = document.getElementById('username-input');
let lastDate = null;
let username = "";
let userList = []
// ------------handel modal-------------------
function open_modal() {
    const modal = new bootstrap.Modal(modal_part);
    modal.show();
    save_name_btn.addEventListener('click', () => {
        if (modal_input.value.trim() !== "") {
            username = modal_input.value.trim();
            modal.hide();
            chat_section.setAttribute("style", "display: flex !important");

            msger_input.focus();
            // send the join message
            const joinMessage = {
                user: username,
                message: `${username} has joined the chat`,
                type: "join"
            };
            websocket.send(JSON.stringify(joinMessage));

        } else {
            alert("Please enter your name.");
        }
    });
}
// ---------------------------------------

websocket.onopen = function () {
    console.log("You are connected");
    open_modal();
    renderUserList();
};

websocket.onmessage = function (ev) {
    const our_text = JSON.parse(ev.data);

    if (our_text.type === "user_list") {
        userList = our_text.user_list;
        renderUserList();
    } else {
        // console.log(our_text)
        const text = our_text.message
        const type = our_text.type;
        const name = our_text.user;
        // showMassage(text, side, img, name)
        const side = type === 'join' || type === 'leave' ? 'center' : 'left';
        const img = type === 'join' || type === 'leave' ? '' : 'https://cdn-icons-png.flaticon.com/128/560/560277.png';

        // Show the message in chat
        showMassage(text, side, img, name);
    }
};

websocket.onclose = function () {
    console.log("You are closed");
};

msger_send_btn.addEventListener("click", sendMessage)

function sendMessage(event) {
    event.preventDefault();

    const messageText = msger_input.value;
    const side = 'right';
    const img = 'https://cdn-icons-png.flaticon.com/128/4727/4727424.png';
    const name = username;

    const message = {
        'user': username,
        'message': messageText,
        'type': side
    }
    if (!messageText.trim()) return;

    showMassage(messageText, side, img, name);
    websocket.send(JSON.stringify(message));
    msger_input.value = '';
}



function showMassage(text, side, img, name) {
    const currentDate = formatDate(new Date())

    let dateHTML = '';
    if (lastDate !== currentDate) {
        lastDate = currentDate;
        dateHTML = `<div class="message-date">${currentDate}</div>`;
    }

    let msgHTML = '';

    if (side === 'center') {
        msgHTML = `
        ${dateHTML}
        <div class="msg system-msg bg-gray rounded">
          <div class="msg-text mx-auto">${text}</div>
        </div>`;
    } else {
        msgHTML = `
        ${dateHTML}
        <div class="msg ${side}-msg">
          <div class="msg-img" style="background-image: url(${img})"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">${name}</div>
              <div class="msg-info-time">${formatTime(new Date())}</div>
            </div>
            <div class="msg-text">${text}</div>
          </div>
        </div>`;
    }

    msger_chat.innerHTML += msgHTML;
    msger_chat.scrollTop = msger_chat.scrollHeight;
}


function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'long',  // Full month name (e.g., "January")
        day: 'numeric', // Day of the month (e.g., 1)
    };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(date) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    return date.toLocaleTimeString('en-US', options);
}


function renderUserList() {
    const userListContainer = document.getElementById('user-list');

    // Create and append the user count
    const countUser = document.createElement('div');
    countUser.innerHTML = `Users online: ${userList.length} including you`;  // Show user count
    userListContainer.innerHTML = ''; // Clear existing list

    // Append the count
    userListContainer.appendChild(countUser);

    console.log(userList);

    // Render the list of users
    userList.forEach(user => {
        const userElement = document.createElement('li');
        userElement.textContent = user;
        userListContainer.appendChild(userElement);
    });
}
