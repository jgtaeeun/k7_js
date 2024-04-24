// 1.DOM에서 이미지와 버튼을 가져오기 =>돔에 생성된 후에
// 2. 버튼 Click 이벤트 만들기
// 3. 자바스크립트 랜덤수 (난수 생성) 1~6  =>Math.floor(Math.random()*6) +1 ;
// 4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기 (attribue)bt1.setAttribute('id', 'bt11');


document.addEventListener('DOMContentLoaded', ()=>{
     
    //1.DOM에서 이미지와 버튼을 가져오기 =>돔에 생성된 후에
    const img = document.querySelector('#btDiv>img');
    const bt = document.querySelector('#btDiv>button');

    bt.addEventListener('click' , ()=>{
               const num =  Math.floor(Math.random()*6) +1 ;
               img.setAttribute ('src' , `./img/${num}.png`);    // 백틱문자
               img.setAttribute ('alt' , `${num}`);
               
              

   });




});
