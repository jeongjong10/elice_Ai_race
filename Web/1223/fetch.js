// 클릭 버튼을 눌렀을때 (버튼 이벤트 핸들러 등록)
// 이벤트 핸들러 함수 등록
// 프리벤트디폴트
// fetch 요청
// 
// 화면에 출력 (출력할 공간 엘리먼트 가져오기)

function giveMePw(e) {
    e.preventDefault();

    fetch('https://randomuser.me/api/?password=upper,lower,number')
        .then(response =>  response.json())
        .then(data => {
            const pw1 = data.result;
            console.log(data);


        });
}



const clickButton = document.querySelector('#buttonSubmit');
const printSpace = document.querySelector('#password');

clickButton.addEventListener('click', giveMePw);