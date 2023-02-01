if (localStorage.getItem("auth") != "true") {
    window.location.pathname = "signin"
} 
if (localStorage.getItem("refreshed") != "1" && localStorage.getItem("auth") == "true") {
    alert("You have been refreshed! This is just to make sure that the people on this website are people that I want on this website, not other people.")
    a = prompt("PWD: ")
    if (a == "wingwing333") {
        localStorage.setItem("refreshed", "1")
    } else {
        window.location.href = "https://mathlibs.onrender.com/gotem"
    }
    
}
