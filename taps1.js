const targetLink = document.querySelectorAll(".tab-menu a");
const tabContent = document.querySelectorAll("#tab-content>div");

/*
1. click한 link 기본 속성을 막기: preventDefault();
2. click한 곳의 속성(href)를 가져와서 변수에 저장: getAttribute("href");
3. 가져온 속성(a href="#tabs-1")에서 '#'를 빼고 다른 변수에 저장.
4. content 부분을 display = "none";을 설정.
5. #를 뺀 것을 getElementById로 가져와서 display = "block"; 설정.
6. .active를 싹 뺐다가 click한 a만 .active를 추가.
7. taps-1은 항상 표시되게 하기.
*/

for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (ev) {
    ev.preventDefault(); //1
    let orgTarget = ev.target.getAttribute("href"); //2
    let tapTarget = orgTarget.replace("#", ""); //3

    for (let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
    } //4

    document.getElementById(tapTarget).style.display = "block"; //5

    for (let z = 0; z < targetLink.length; z++) {
      targetLink[z].classList.remove("active");
      ev.target.classList.add("active");
    } //6
  }); //click하면 할 일.
}

document.getElementById("tabs-1").style.display = "block"; //7
