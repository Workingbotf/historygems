if (!localStorage.getItem("auth") == "true") {
    window.location.pathname = "signin.html"
} else {
    if (!localStorage.getItem("isOnWebsite") || localStorage.getItem("isOnWebsite") == "false") {
        window.location.pathname = "main.html"
        localStorage.setItem("isOnWebsite", "true")
    }
    
}
onbeforeunload((() => {localStorage.setItem("isOnWebsite", "false")})); 
