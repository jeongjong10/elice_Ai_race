
// -3층
// 공백 5 별 1
// 공백 3 별 3
// 공백 1 별 5

// 1,3,5,7,9,....
// 홀수로 찍음 2n-1개씩
// 공백은 
// 별은 

function pyramid(height) {

    let i = 1;
    let temp = height;
    while ( height >= i) // 층수 만큼 반복
    {
        
        // 공백 찍기
        let j = 0;
        while (temp > j) // (2*temp-1) > j
        {
            document.write('&nbsp');
            j++;
        }
        // 별찍기
        let k = 0;
        while ((2*i-1) > k)
        {
            document.write('*');
            k++;
        }
        document.write("<br>");
        i++;
        temp--;
    }
}
