function register() {
    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if (!user || !pass) {
        document.getElementById("msg").innerText = "Fill all fields!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(u => u.username === user);

    if (exists) {
        document.getElementById("msg").innerText = "User already exists!";
        return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "login.html";
}