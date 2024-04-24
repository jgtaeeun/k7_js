// 1. 04.HTML에서 버튼과 이미지 가져오기
// 2. 버튼 클릭 함수
// 2-1.JS에 버튼 만들기
// 2-2. 랜덤함수로 컴퓨터 이미지 속성 바꾸기
// 2-3. 사용자 버튼 클릭마다 사용자 이미지 속성 바꾸기
// 3.이미지 비교하고 결과창에 같음 다름 텍스터 속성 바꾸기

const compare = (n,imgu_1,imgc_1,result_1)=>{
    imgu_1.setAttribute ('src' , `../03/img/${n}.png`);    // 백틱문자
    imgu_1.setAttribute ('alt' , `${n}`);

    
    const num =  Math.floor(Math.random()*6) +1 ;
    imgc_1.setAttribute ('src' , `../03/img/${num}.png`);    // 백틱문자
    imgc_1.setAttribute ('alt' , `${num}`);

    // 3.이미지 비교하고 결과창에 같음 다름 텍스터 속성 바꾸기

     
    if (imgc_1.getAttribute('src') == imgu_1.getAttribute('src'))
          result_1.innerHTML = '같음';
    else result_1.innerHTML = '다름';

}




document.addEventListener('DOMContentLoaded' , ()=>{
              console.log('DOM 완성');
            
              const imgc=document.querySelector('#computer>ul>li>img');
              const imgu=document.querySelector('#user>ul>li>img');
              const bts1=document.querySelector('#select1'); 
              const bts2=document.querySelector('#select2');
              const bts3=document.querySelector('#select3');
              const bts4=document.querySelector('#select4');
              const bts5=document.querySelector('#select5');
              const bts6=document.querySelector('#select6');
             
              const result=document.querySelector('#resultmsg');
        
              

              bts1.addEventListener('click' , ()=>{
                compare(1, imgu,imgc,result);

             });

             bts2.addEventListener('click' , ()=>{
                imgu.setAttribute ('src' , `../03/img/${2}.png`);    // 백틱문자
                imgu.setAttribute ('alt' , `${2}`);

                
                const num =  Math.floor(Math.random()*6) +1 ;
                imgc.setAttribute ('src' , `../03/img/${num}.png`);    // 백틱문자
                imgc.setAttribute ('alt' , `${num}`);

                if (imgc.getAttribute('src') == imgu.getAttribute('src'))
                  result.innerHTML = '같음';
                else result.innerHTML = '다름';
             });

             bts3.addEventListener('click' , ()=>{
                imgu.setAttribute ('src' , `../03/img/${3}.png`);    // 백틱문자
                imgu.setAttribute ('alt' , `${3}`);

                
                const num =  Math.floor(Math.random()*6) +1 ;
                imgc.setAttribute ('src' , `../03/img/${num}.png`);    // 백틱문자
                imgc.setAttribute ('alt' , `${num}`);

                if (imgc.getAttribute('src') == imgu.getAttribute('src'))
                  result.innerHTML = '같음';
                else result.innerHTML = '다름';
             });

             bts4.addEventListener('click' , ()=>{
                imgu.setAttribute ('src' , `../03/img/${4}.png`);    // 백틱문자
                imgu.setAttribute ('alt' , `${4}`);

                
                const num =  Math.floor(Math.random()*6) +1 ;
                imgc.setAttribute ('src' , `../03/img/${num}.png`);    // 백틱문자
                imgc.setAttribute ('alt' , `${num}`);

                if (imgc.getAttribute('src') == imgu.getAttribute('src'))
                  result.innerHTML = '같음';
                else result.innerHTML = '다름';
             });
             
             bts5.addEventListener('click' , ()=>{
                imgu.setAttribute ('src' , `../03/img/${5}.png`);    // 백틱문자
                imgu.setAttribute ('alt' , `${5}`);

                
                const num =  Math.floor(Math.random()*6) +1 ;
                imgc.setAttribute ('src' , `../03/img/${num}.png`);    // 백틱문자
                imgc.setAttribute ('alt' , `${num}`);

                if (imgc.getAttribute('src') == imgu.getAttribute('src'))
                  result.innerHTML = '같음';
                else result.innerHTML = '다름';
             });

             bts6.addEventListener('click' , ()=>{
                imgu.setAttribute ('src' , `../03/img/${6}.png`);    // 백틱문자
                imgu.setAttribute ('alt' , `${6}`);

                
                const num =  Math.floor(Math.random()*6) +1 ;
                imgc.setAttribute ('src' , `../03/img/${num}.png`);    // 백틱문자
                imgc.setAttribute ('alt' , `${num}`);

                if (imgc.getAttribute('src') == imgu.getAttribute('src'))
                  result.innerHTML = '같음';
                else result.innerHTML = '다름';
             });

                   

});