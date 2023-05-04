function login (event){
    // alert ("working")
    event.preventDefault();

    var userEmail = document.getElementById("Hotstaruseremail").value;
    var userPassword = document.getElementById("Hotstaruserpassword").value;

    var Ls = JSON.parse(localStorage.getItem("HotUsers"));

    var currentUser;
    var flag = false;
    for (var i=0;i< Ls.length;i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser = Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("currentUser",JSON.stringify(currentUser))
        window.location.href = './HotstarHome.html';
        alert("Login Successful")
    }else {
        alert("Credential not Matched")
    }

}