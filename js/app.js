var debug = "ok";

var main = function() {
    $('#login-form').submit(function() {
        $('#login-form .email-error, #login-form .password-error').text('');

        var email = $('#email').val();
        var password = $('#login-form #password').val();

        if(email === "") {
            $('#login-form .email-error').text('Please Enter An Email');
        }
        if (password === "") {
            $('#login-form .password-error').text('Please Enter A Password');
        }

        return false;
    });

    console.log(debug);
};

$(document).ready(main);
