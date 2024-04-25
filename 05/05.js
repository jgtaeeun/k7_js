//1. 돔에서 제어할 노드를 가져오기
// 2. 6개 버튼 클릭을 확인
// 3-1. 버튼 클릭 시 해당하는 버튼의 숫자를 추출 =>사용자 선택 숫자(user) =>이미지 변경
// 3-2. 랜덤 수를 생성 =>컴퓨터 숫자 (com) =>이미지 변경
// 4. 사용자 숫자(use)와 컴퓨터 숫자(com) 비교
// 5. 결과 출력


document.addEventListener('DOMContentLoaded', ()=>{
              const comImg = document.getElementById('com');
              const userImg =  document.querySelector('#user');

              const msg = document.querySelector('#msg');       

              const bts =  document.querySelectorAll('section>button');
              //const bts= document.querySelectorAll('.bt4'); //버튼 클래스를 bt4로 했을 경우
              console.log(bts); //NodeList(6)


              for (let bt of bts){

                bt.addEventListener('click', ()=>{

                // 3-1. 버튼 클릭 시 해당하는 버튼의 숫자를 추출 =>사용자 선택 숫자(user) =>이미지 변경
                // 3-2. 랜덤 수를 생성 =>컴퓨터 숫자 (com) =>이미지 변경
               // 4. 사용자 숫자(use)와 컴퓨터 숫자(com) 비교
                // 5. 결과 출력

                // console.log(bt.innerHTML)   //버튼text 가져온다.
                // console.log(bt.innerHTML.charAt(0)) //버튼text의 숫자만 가져온다.
                // console.log(bt.textContent.slice(0,1)) //왼쪽부터 1개
                const user = parseInt(bt.textContent.slice(0,1));
                const com = Math.floor(Math.random()*6) +1 ;

                userImg.setAttribute ('src', `../03/img/${user}.png`);
                
                comImg.setAttribute ('src', `../03/img/${com}.png`);
                // comImg.setAttribute('alt', `computer num${com}`);

                if (com === user){
                    msg.innerHTML = "맞음";
                }else msg.innerHTML="틀림";
               
                });
               
             }
});



            // // 반복문 1 for
            // console.log('반복문i')
            
            // for (let i = 0 ; i < bts.length ; i++){
            //     console.log(bts[i])
            // }

            // // 반복문 2 for in
            // console.log('반복문i')
            
            // for (let i in bts){
            //     console.log(bts[i])
            // }
          
            // // 반복문 3 forEach
            // console.log('반복문i')
            
            // bts.forEach(bt => {
            //  console.log(bt)
            // })

            // // 반복문 4 for of
            // console.log('반복문i')
            // for(let bt of bts){
            //     console.log(bt)
            // }

            // for(let [i,bt] of bts.entries()){
            //     console.log(i, bt)
            // }
