document.getElementById('register-form').addEventListener('submit', function(event) {
    // prevent submitting default form
    event.preventDefault();

    // get username and password
    var username = document.getElementById('new-username').value;
    var password = document.getElementById('new-password').value;

    // check if username is between 5-12 characters
    if (!username.match(/^[A-Za-z]{5,12}$/)) {
        alert('username should between 5-12 characters');
        return false;
    }

    // check if password is more than 6 characters
    if (password.length <= 6) {
        alert('password should contain at least 6 characters');
        return false;
    }

    // submit the form if username and password are matched
    this.submit();
});
