 // 바구니에는 100개에 사과가 들어있습니다. 
 // 사과를 똑같이 나누어줄 사람의 수를 입력받고, 바구니에 남아있는 사과의 개수를 출력하는 프로그램을 작성하시오.
 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
 function solution(count) {
    // 사람수 입력받기 readline
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin, output: process.stdout
    });

    rl.on('line', function (line) {
        count = line;
        rl.close();
    });
    rl.on('close', function () {});

    console.log();
    // 사과 100개를 count명한테 동일한 갯수씩 나눠주고 남은 사과의 개수를 반환
    // count x i > 100 break i-1 = left
    let i = 1;
    while (count * i <= 100)
    {
        i++;
    }

    return (100 - count * (i-1));
 }
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  