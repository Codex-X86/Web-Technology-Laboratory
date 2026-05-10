function login() {
    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = users.find(u => u.username === user && u.password === pass);

    if (found) {
        localStorage.setItem("loggedUser", user);
        window.location.href = "index.html";
    } else {
        document.getElementById("msg").innerText = "Invalid login!";
    }
}