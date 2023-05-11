function login (event){
    // alert ("working")
    event.preventDefault();

    var userEmail = document.getElementById("Hotstaruseremail").value;
    var userPassword = document.getElementById("Hotstaruserpassword").value;

    var Ls = JSON.parse(localStorage.getItem("HotUsers"));

    var HotstarcurrentUser;
    var flag = false;
    for (var i=0;i< Ls.length;i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            HotstarcurrentUser = Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("HotstarcurrentUser",JSON.stringify(HotstarcurrentUser))
        window.location.href = './Hotstarjs.html';
        alert("Login Successful")
    }else {
        alert("Credential not Matched")
    }

}