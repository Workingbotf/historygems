if (localStorage.getItem("auth") != "true") {
    window.location.pathname = "signin.html"
} else {
    window.location.pathname = "main.html"
}
