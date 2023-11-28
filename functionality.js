const form = document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "prashantrajput2517@gmail.com",
        Password : "98416838CAEC1D37AC87AEC2CC23B9F55AB0",
        To : 'prashantlodhi2599@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form Enquiry",
        Body : "Name :" + document.getElementById("name").value
                + " <br> Email :" + document.getElementById("email").value
                + " <br> Message :" + document.getElementById("message").value
    }).then(
    message => alert("Message sent Successfully")
    );
}