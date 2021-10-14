function validate() {
    let username = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let phoneNo = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;
    let role = document.getElementById("role").value;
    if (username == "" || email == "" || phoneNo == "" || pass == "") {
        alert("Input cannot be empty");
        return false;
    } else {
        localStorage.setItem("Username", username);
        localStorage.setItem("Useremail", email);
        localStorage.setItem("PhoneNo", phoneNo);
        localStorage.setItem("Password", pass);
        localStorage.setItem("userrole", role);
        window.location.replace("/platform/platform.html");
    }
}