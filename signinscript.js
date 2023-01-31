function submit() {
    if (document.getElementById("user").value == "lokiscifi" && document.getElementById("pwd").value == "nyim@123") {
        localStorage.setItem("auth", "true")
        window.location.pathname = ""
    }
}