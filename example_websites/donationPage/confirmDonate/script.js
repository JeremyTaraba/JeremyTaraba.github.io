
let submmitButton = document.getElementById('submitDonation');
let donationForm = document.getElementById('donation-form');

// donationForm.addEventListener("submit" , event => {
//     event.preventDefault();
//     document.location.href="mailto:mail@example.org";
// })


function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('amount').value)
    ;
    
    window.location.href = link;
}