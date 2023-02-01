function submit() {
    console.log(window.btoa("singyourmom"), window.btoa("singyourdad@123"))
    if (document.getElementById("user").value == window.atob("c2luZ3lvdXJtb20=") && document.getElementById("pwd").value == window.atob("c2luZ3lvdXJkYWRAMTIz")) {
        localStorage.setItem("auth", "true")
        window.location.pathname = ""
    }
}