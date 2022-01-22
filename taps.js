const targetLink = document.querySelectorAll(".tab-menu a");
const tabContent = document.querySelectorAll("#tab-content>div");

for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (ev) {
    // 2. link의 기본 속성 막기. 주소창 보면 알게 됨.
    ev.preventDefault();

    //2-1. a의 href(속성) 가져와서 저장. (변수:orgTarget) => 속성을 가져오는 것은 getAttribute();
    let orgTarget = ev.target.getAttribute("href");
    //console 확인. console.log(orgTarget);

    //2-2.가져온 속성에서 #을 빼서 변수에 저장. => a.replace('b', 'c'); : 변수 안에서 b를 c로 바꿀 수 있다.
    let tapTarget = orgTarget.replace("#", ""); //"tabs-1";

    //3.tab-content의 내용을 안보이게 하기.
    for (let x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none";
    }

    //3-1. #을 뺀 값(id임.)을 불러와 display = 'block';을 한다.
    document.getElementById(tapTarget).style.display = "block";

    //4-3. .active를 click된 a 태그마다 옮기기. (targetLink)
    for (let j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove("active"); //다 빼기.
      ev.target.classList.add("active"); //click한 놈만 추가.
    }
  });
}

//4-2. taps-1은 항상 표시되게 하기.
document.getElementById("tabs-1").style.display = "block";

//4. active를 이용해서 클릭한 곳 표시하기.
//4-1. css에서 .active가 있을 때 어떻게 표시할지 정하기.
