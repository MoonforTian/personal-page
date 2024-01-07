document.getElementById('submitBtn').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    if (message === '') {
        alert('the content cannot be empty');
        return;
    }

    if (username === '') {
        username = 'guest';
    }

    var messageBoard = document.getElementById('messageBoard');
    var newMessage = document.createElement('div');
    newMessage.classList.add('message');
    // use getCurrentUTCTime to check the time zone of users
    newMessage.innerHTML = '<div class="message-info"><div class="info"><strong>' +
        username + '</strong></div><span>' + getCurrentUTCTime() + 
        '</span></div><div class="content">' + message + '</div>';

    messageBoard.insertBefore(newMessage, messageBoard.firstChild);

    document.getElementById('username').value = '';
    document.getElementById('message').value = '';
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('initialTime').textContent = getCurrentUTCTime();
});

function getCurrentUTCTime() {
    var now = new Date();
    var year = now.getUTCFullYear();
    var month = ('0' + (now.getUTCMonth() + 1)).slice(-2);
    var day = ('0' + now.getUTCDate()).slice(-2);
    var hours = ('0' + now.getUTCHours()).slice(-2);
    var minutes = ('0' + now.getUTCMinutes()).slice(-2);
    var seconds = ('0' + now.getUTCSeconds()).slice(-2);
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
