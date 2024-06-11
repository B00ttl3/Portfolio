document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("keG9Xplm04khorDMM");
  });

  function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Umair Munir', 
      subject: subject,
      message: message
    };

    emailjs.send('service_67v9e1w', 'template_m2cldkd', templateParams)
      .then(function(response) {
        alert('SUCCESS!', response.status, response.text);
      }, function(error) {
        alert('FAILED...', error);
      });
  };