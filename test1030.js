function f(e) {
let p = document.getElementById('p')
let text = "1. 가수 테이가 부른 노래의 제목은 ? <br> 2. 개발자가 좋아하는 노래의 장르는 ? <br> 3. 개발자가 소개한 노래들의 개수는?"
p.innerHTML  = text;
}

let a1;

function init() {
    a1 = document.getElementById("a1")
    a1.addEventListener("mouseover",over);
    a1.addEventListener("mouseout",out);
    
}

function over() {
    a1.style.color = "blue";
}
function out() {
    a1.style.color = "white";
}

function query() {
    let ret = confirm("개발자 깃허브로 이동하시겠습니까??");
    return ret;
}
function noAction(e) {
    e.preventDefault();
}

let current = new Date();
if(current.getSeconds() % 2 == 0) {
    document.style.color = "violet";}
else{
    document.style.color = "lightskyblue";}

function now() {
    document.write("현재 시간 : ");
    document.write(current.getHours(), "시,");
    document.write(current.getMinutes(), "분,");
    document.write(current.getSeconds(), "초<br>");
}