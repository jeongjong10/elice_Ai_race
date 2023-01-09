# 주어진 금액 n원을 최소한의 동전을 사용해서 반환하라

def setCoin(n):
    coins = [10,50,100,500] # 동전 종류
    coins.sort(reverse = True) # 연산시 큰 동전부터 하기 때문에 내림차순 정렬
    # 최종 반환값을 만들어줄 빈 딕셔너리 results
    # results 딕셔너리의 구조 정의 {coin : 0, coin : 0, ...}
    results = {coin : 0 for coin in coins}
    
    # 큰 동전부터 작은 동전까지 순회하는 반복문
    for coin in coins:
        coinCnt = n//coin # 동전의 갯수 계산 (몫 연산)
        n = n - (coin * coinCnt) # 구한 동전의 갯수를 이용해 남는 금액 계산
        results[coin] = coinCnt

    return results



# 실행 함수
def main():
    n = int(input())    # 금액 입력 받기 (conis 함수에 파라미터로 넘김)
    cnt = 0             # 최종 출력 값(동전 갯수)을 위한 변수 cnt 선언
    for value in setCoin(n).values(): # keys(),values() 딕셔너리의 키와 밸류 값 불러오는 함수 *items() = key:value 값
        cnt+=value # coins함수의 실행결과 만들어진 데이터에서 '동전의 갯수'밸류 값을 골라 누산
    print(cnt)     # 최종 동전 갯수 출력
                                    # setCoin()함수의 최종 반환값의 형태는
                                    # [동전:갯수, 동전:갯수, ...] 형태로
                                    # value 값들의 합을 구할 수 있어야 한다.

if __name__ == "__main__":
    main()