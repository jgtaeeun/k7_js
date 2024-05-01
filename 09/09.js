document.addEventListener('DOMContentLoaded', ()=>{
       const txt1 = document.querySelector('#txt1');
       const bt81 = document.querySelectorAll('.bt81');
       const bt82 = document.querySelectorAll('.bt82');
       const bt83 = document.querySelectorAll('.bt83');


       let arr= [];
       let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉' ,
        '당근' : '🥕',
        '아보카도' : '🥑',
        '오이' : '🥒',
        '브로콜리' :'🥦' ,
       }
       for (let bt of bt81){
         bt.addEventListener('click', (e)=>{

            e.preventDefault();
            console.log(bt.textContent)
            //배열과 if문 이용
            // if(bt.textContent == '사과') arr.push('🍎');
            // else if (bt.textContent == '바나나') arr.push('🍌');
            // else if (bt.textContent == '오렌지') arr.push('🍊');
            // else if (bt.textContent == '수박') arr.push('🍉');

            


            arr.push(obj[bt.textContent]);  //object쓰면 if문 필요 없다.
            txt1.value = arr.join(' ');  // 배열 나열할 때 생기는 ,콤마 제거
         });

       }
       
       for (let bt of bt82){
        bt.addEventListener('click', (e)=>{

           e.preventDefault();
           console.log(arr)
           console.log(obj[bt.textContent.replace('삭제', '')])

        // //    //배열 필터
           const k = obj[bt.textContent.replace('삭제', '')];
           arr = arr.filter((item)=> {return item != k});     //필터는 k가 아닌 것을 골라내는 것이다.
        // //  //  arr = arr.filter(item=>  item != k);  리턴만 있을 때는 중괄호와 리턴 생략 , 매개변수 1개 있으면 괄호생략
           txt1.value = arr.join(' ');
        });

      }

      for (let bt of bt83){
        bt.addEventListener('click', (e)=>{

           e.preventDefault();
           let tm = bt.textContent.split('→');
           console.log(tm)

          arr = arr.map((item) => {                            //함수 map은 조건에 따라 return값이 달라짐
            console.log(item, obj[tm[0]], obj[tm[1]])          //입력이미지 - 화살표기준 앞- 조건(같으면 전환, 다르면 그대로)
            return item==obj[tm[0]] ? obj[tm[1]] : item});
          //  arr = arr.map(item =>   item==obj[tm[0]] ? obj[tm[1]] : item);
            
            txt1.value= arr.join(' ');
        
        });

      }
        
       
});