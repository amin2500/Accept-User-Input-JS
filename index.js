let username 

document.getElementById("Mysubmit").onclick = function() {
   username = document.getElementById("Mytext").value
    document.getElementById("H1").textContent = (`Hello ${username}`)
}