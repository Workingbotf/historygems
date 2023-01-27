if (!localStorage.getItem("auth") == "true") {
    window.location.pathname = "signin.html"
} else {
    if (!localStorage.getItem("isOnWebsite") || localStorage.getItem("isOnWebsite") == "false") {
        window.location.pathname = "main.html"
        localStorage.setItem("isOnWebsite", "true")
    }
    
}
function onbeforeunload() {
    localStorage.setItem("isOnWebsite", "false")
} 
function onload() {
    localStorage.setItem("isOnWebsite", "true")
}
