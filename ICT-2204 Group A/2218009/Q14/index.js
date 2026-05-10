window.onload = function () {
    let user = localStorage.getItem("loggedUser");

    if (!user) {
        window.location.href = "login.html";
    } else {
        let welcome = document.createElement("div");
        welcome.style.textAlign = "center";
        welcome.style.padding = "10px";
        welcome.innerHTML = "Welcome " + user;

        document.body.prepend(welcome);
    }
}