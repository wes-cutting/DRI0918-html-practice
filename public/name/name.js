const changeName = (event) => {
    event.preventDefault();
    document.getElementById("nameDisplay").innerHTML = document.getElementById("nameCapture").value;
}