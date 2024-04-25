//dom에서 제어할 노드를 가져오기
//버튼이 눌러지면
//확인버튼일 때
 //랜덤 수 생성=>랜덤수가 다시 하기 전까지 숫자 유지
 //input박스 값이 없으면 값을 입력하세요 출력
 //input박스 값에 따른 업다운 , 굿 이미지
 //good일경우 input이 보이지 않아야 함, 버튼의 캡션은 숫자를 생성해주세요
 
 
 //숫자를 생성해주세요 버튼일 때
 //초기화:랜덤 수 새로 생성, input박스 보이기

 document.addEventListener('DOMContentLoaded', ()=>{
        const updownimg = document.getElementById('updownimg');
        const checkbt =  document.querySelector('.checkbt');
        const inputbox = document.querySelector('input');
        const ifgooddiv= document.querySelector('#btDiv4');

        let n ; //랜덤으로 지정된 숫자(전역변수)
        let flag = true;

        checkbt.addEventListener('click', (e)=>{
        e.preventDefault(); //폼태그를 쓸 경우, 다시 호출되지 않도록(form태그 메서드에 자기자신 부르도록 default되어있다.)
        if(flag){        
            flag=false;                  //flag가 true일 때 랜덤 수 생성
            n = Math.floor(Math.random()*100) +1 ;  //1~100
            console.log('n=',n);
        }
        
        
        if (inputbox.value ==''){
            alert('숫자를 입력하세요')
            inputbox.focus(); //입력박스에 cursor가 있다.
            return;           //이후 함수로 가지 않는다.
        }

        if (!((inputbox.value >= 1) && (inputbox.value <= 100))){
            alert('1부터 100의 숫자범위가 아닙니다.')
            inputbox.focus(); //입력박스에 cursor가 있다.
            return;
        }
        
      
        if (inputbox.value >n) {
                updownimg.setAttribute('src', `./img/down.png`);
                inputbox.focus(); 
        }
        else if (inputbox.value < n){
              updownimg.setAttribute('src', `./img/up.png`);
              inputbox.focus(); 
        }
        else 
        {   //good일경우 inputbox, 확인 버튼이 보이지 않아야 함 & 숫자를 생성해주세요 버튼 생성
            updownimg.setAttribute('src', `./img/good.png`);
             //(inputbox, 확인 버튼이 보이지 않아야 함)
            
            checkbt.style.display= 'none';
            inputbox.style.display= 'none';

            const resection = document.createElement('section'); 
            ifgooddiv.append(resection);
            const rebt = document.createElement('button');        
            const rebtTxt = document.createTextNode('숫자를 생성해주세요');   
            rebt.setAttribute('id', 'rebt');
            rebt.appendChild(rebtTxt); 
            resection.append(rebt);      
            

            //숫자를 생성해주세요 버튼클릭 시 초기화:랜덤 수 새로 생성, input박스와 확인 버튼 다시 보이기
            rebt.addEventListener('click', ()=>{
                 
                 //input박스와 확인 버튼 다시 보이기/rebt 사라짐/input 박스 값 초기화/이미지 what)
                 checkbt.style.display= 'block';
                 inputbox.style.display= 'block';
                 rebt.style.display= 'none';
                 inputbox.value='';
                 inputbox.focus();
                 updownimg.setAttribute('src', `./img/what.png`);
                 
                 //n값 초기화
                 flag=true;
                 return;
            });
        }
             
        

        }); 

 });