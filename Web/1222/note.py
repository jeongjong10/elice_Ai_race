# 문장(문자열)에서 단어의 개수를 세는 함수를 작성해 보세요

# 문자열의 각 문자를 단어의 첫문자와 비교
# 일치하면 두번째 반복문으로 들어가
# 단어의 문자와함께 인덱스를 증가시키며 비교
# -> 이중 반복문
def countWord(sentence, word):
    count = 0
    flag = False

    i = 0
    while(i < len(sentence)):
        if (sentence[i] == word[0]):
            flag = checkWord(sentence, i, word)
        if flag == True:
            count += 1
        i += 1
    
    return count

def checkWord(sentence, i, word):
    j = 0
    flag = True
    while (j < len(word)):
        i += 1
        j += 1
        if sentence[i] != word[j]:
            flag = False
            break
    return flag


def main():
    sentence = input()
    searchingWord = input()
    
    print(countWord(sentence, searchingWord))


if __name__ == "__main__":
    main()
