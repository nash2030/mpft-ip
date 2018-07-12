$(document).ready(function(){
  $('.button3').click(function(){
  s=prompt('Enter your email address');
});
});
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function button(){
    $("#submit").click(function(){
        var emailing = $("input#email").val();

        return alert(emailing + " has been successfully added to our email list. Thank you.");
    event.preventDefault();
    });
});
