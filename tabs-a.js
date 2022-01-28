const tabList = document.querySelectorAll(".tab_menu .list li");
const contents = document.querySelectorAll(".tab_menu .cont_area .cont");
let activeCont = "";

for (let i = 0; i < tabList.length; i++) {
  // a tag에 click event 넣기.
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    // click하면 하는 일.
    //1. a의 기본 동작 막기.
    e.preventDefault();

    //2. list의 class="is_on"을 전부 제거하고 모두 display='none'
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on"); //is_on 전부 제거
      contents[j].style.display = "none";
    }

    //3. a의 부모에 .is_on 추가.
    this.parentNode.classList.add("is_on");

    //4. activeCont애 이벤트가 일어난 a에 href=#tab$ 가져와서 저장.
    activeCont = this.getAttribute("href"); // #tab1 or 2 or 3

    //5. 변수에 저장된 id에 style을 변경
    document.querySelector(activeCont).style.display = "block";
  });
}
