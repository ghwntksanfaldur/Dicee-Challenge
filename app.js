// alert('하이')

//이미지1 태그를 '선택'     img1이라는 클래스를 가진 태그
const img1 = document.querySelector('.img1');
//이미지2 태그를 '선택'     img2라는 클래스를 가진 태그
const img2 = document.querySelector('.img2');
//누가이겼나 관련
const h1 = document.querySelector('h1')



//인터넷에서 긁어옴 이걸어떻게 건드리더만 결국 지우고 아래처럼  Math.floor(Math.random() * 6) + 1; 
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
//   }


//함수를 불러와서 값을 저장한다
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

//이거 위에있다가 랜덤에 넣을려고 밑으로 내림
//img1 img2 둘다 src="" 이지만 여기서 적어주면 해당 사진이 각각 들어가고, 이걸 저장하면 화면에 사진이 뜨게됨
img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');
//그값이 f12에서 뜨도록 콘솔에 넣음
console.log(randomNumber1)
console.log(randomNumber2)
//이렇게하면 사진과 콘솔 같이 뜸


//마지막으로 플레이어1이 이겼는지 2가 이겼는지 확인하는 과정을 나타내기 큰수가 뜨면 이긴거
//위쪽에 h1 선언
// h1.innerText = '글자넣기'
h1.innerText = '누가 이겼는지?'

//if else문으로 플레이어1,2중 누가 이겼는지 표시하라!
//이모지? 나오려면 윈도우+세미콜론   
if (randomNumber1 > randomNumber2) {
    h1.innerText = 'player 1 승리!'
}
else if (randomNumber1 == randomNumber2) {
    h1.innerText = '무승부!'
}
else {
    h1.innerText = 'player 2 승리!'
}




