// 검색창
function change() {
    console.log(document.getElementById("searchBox").value);
    return document.getElementById("searchBox").value;
}
function searchClick() {
    console.log(document.getElementById("searchBox").value);
    return document.getElementById("searchBox").value;
}


// 상단바
var modal = document.getElementById("myModal");
var btn = document.getElementById("popMenu");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
