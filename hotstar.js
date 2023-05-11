function register(event) {
    // alert("working")
    event.preventDefault();

    var Name = document.getElementById("Hotstarusername").value
    // console.log(Name);
    var Email = document.getElementById("Hotstaruseremail").value
    // console.log(Email);
    var Password = document.getElementById("Hotstaruserpassword").value
    // console.log(Password);
    var Confirmpassword = document.getElementById("Hotstaruserconfirmpassword").value
    // console.log(Confirmpassword);

    if(Name && Email && Password && Confirmpassword) {
        if(Password.length >=8 && Confirmpassword){
            if(Password == Confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("HotstarUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == Email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {userName: Name,userEmail: Email,userPassword: Password,userConfirmPassword: Confirmpassword}
                    Ls.push(userdata);
                    localStorage.setItem("HotUsers", JSON.stringify(Ls))
                    alert("Registration Successful");
                    window.location.href = `./HotstarLogin.html`;
                    document.getElementById("Hotstarusername").value = ""
                    document.getElementById("Hotstaruseremail").value = ""
                    document.getElementById("Hotstaruserpassword").value = ""
                    document.getElementById("Hotstaruserconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }else {
                console.log("Password Not Matched")
            }
        }else {
            console.log("Password should contain alteast 8 characters")
        }
    }else {
        console.log ("All fields are mandatory")
    }
}