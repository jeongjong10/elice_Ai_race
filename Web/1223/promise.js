// 입력받은 인풋값 변수
// 입력 버튼 변수에 이벤트 추가
// 버튼 클릭시 인풋값 받아오고, data 뒤져서, 일치하는 색상 코드 출력
// 출력할 태그 변수
// 

function findHexCode(e) {
    e.preventDefault();
    let color = inputColor.value

    fetch('data.json')
    .then((response) => response.json())
    .then(function (datas) {
        const findData = datas.find(function (data) {
            data.color === color;
        });
        outputPlace.innerHTML = findData.value;
    })
}

const inputColor = document.getElementById('inputColor');
const inputButton = document.getElementById('buttonSubmit');
const outputPlace = document.querySelector('#hexaCode');

inputButton.addEventListener('click', findHexCode);