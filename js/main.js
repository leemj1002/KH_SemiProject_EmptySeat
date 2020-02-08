// 검색창
function change() {
    let searchValue = document.getElementById("searchBox").value;
    if (searchValue !== "") {
        console.log(searchValue);
        return searchValue;
    }
}
function searchClick() {
    let searchValue = document.getElementById("searchBox").value;
    if (searchValue !== "") {
        console.log(searchValue);
        return searchValue;
    }
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

// 메인로고 바뀌게
var transLogo = document.getElementById("transLogo");
var mainLogo = document.getElementById("mainLogo");

transLogo.addEventListener("mouseover", trans);
function trans() { //바뀜
    mainLogo.setAttribute("src", "image/빈시트500-1.png");
}
transLogo.addEventListener("mouseleave", leave);
function leave() { //돌아옴
    mainLogo.setAttribute("src", "image/빈시트500-2.png");
}
