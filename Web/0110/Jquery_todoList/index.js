// 등록 버튼을 눌렀을때, todolist에 등록
$(function () {
    // 등록 버튼에 이벤트를 등록
    // 클릭시, input 태그 안의 데이터를 가져오고,
    // todolist의 li를 생성함
    $("#create").on("submit", function (event) {
        event.preventDefault();
        const value = $(this).find('input').val();

        $("#todo_list").append(
            "<li>"+
                "<span>"+value+"</span>"+
                '<button type="button" class="complete">완료</button>'+
                '<button type="button" class="remove">삭제</button>'+
            '</li>'
        );

        $(this).trigger('reset');

    }); // 등록 버튼 클릭시 새로운 li 생성 완료


    $('body').on('click', '.complete', ()=>{
        $(this).parent('li').addClass('complete');
    })


    $('body').on('click', '.remove', ()=>{
        $(this).parent('li').remove();
    })






});