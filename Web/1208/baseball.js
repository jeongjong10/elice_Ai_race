// 지시사항을 참고하여 코드를 작성하세요.
// 엘리스 토끼 16타수 6안타 3할 7푼 5리
//              6/15 = 0.375
// 추가 타수game와 안타 hit가 입력으로 주어지면 엘리스 토끼의 타율은?
// 

let hit = 6;
let game = 16;
let hitgame = [];
let avr;

// 추가 입력
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    hitgame.push(parseInt(line));
    if (hitgame.length == 2) {
        rl.close(); 
    }
});

rl.on('close', function() {
    // 코드블럭 hitgame[hit,game]
    game = game + hitgame[0];
    hit = hit + hitgame[1];
    console.log(hit, game);
    avr = Math.floor((hit/game)*1000).toString().split("");
    for (let i = 0; i<3; avr[i] != 0; i++) {
        if (avr[i] != 0)
        {
            switch (i) 
            {
                case 0:
                    console.log(`${avr[i]}할`);
                    break;
                case 1:
                    console.log(`${avr[i]}푼`);
                    break;
                case 2:
                    console.log(`${avr[i]}리`);
                    break;
            }
        }
    }
});