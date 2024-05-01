
const showImg = (imgName)=>{
    const updownimg = document.getElementById('updownimg');
    updownimg.setAttribute('src', `./img/${imgName}.png`);
}

document.addEventListener('DOMContentLoaded', ()=>{
    const updownimg = document.getElementById('updownimg');
    const checkbt =  document.querySelector('.checkbt');
    const inputbox = document.querySelector('input');
    const ifgooddiv= document.querySelector('#btDiv4');
    let count = 0;
    let n ; //랜덤으로 지정된 숫자(전역변수)
    let flag = true;
    
    let imgName;

    checkbt.addEventListener('click', (e)=>{
    e.preventDefault(); //폼태그를 쓸 경우, 다시 호출되지 않도록(form태그 메서드에 자기자신 부르도록 default되어있다.)
    if(flag){        
        flag=false;                  //flag가 true일 때 랜덤 수 생성
        n = Math.floor(Math.random()*100) +1 ;  //1~100
        console.log('n=',n);
         //두번째 실행부터 필요한 부분
        showImg('what');
        inputbox.style.display='inline';
        checkbt.textContent = '확인';
        

    }
    
    
    if (inputbox.value ==''){
        alert('숫자를 입력하세요')
        inputbox.value='';
        inputbox.focus(); //입력박스에 cursor가 있다.
        return;           //이후 함수로 가지 않는다.
    }

    const userinput = parseInt(inputbox.value);     //input박스 입력은 문자열타입이다.


    if (!((userinput >= 1) && (userinput <= 100))){
        alert('1부터 100의 숫자범위가 아닙니다.')
        inputbox.value='';
        inputbox.focus(); //입력박스에 cursor가 있다.
        return;
    }
    


    if (userinput >n) 
        imgName='down';

    else if (userinput < n){
        imgName='up';
    }
    else 
    {
        imgName='good';
        inputbox.style.display='none';
        checkbt.textContent = '숫자를 다시 생성해주세요';
        // checkbt.innerHTML='숫자를 다시 생성해주세요';
        flag =true;
       
    }

    if (imgName==='down' || imgName==='up'){
        inputbox.focus();
    }

    
    showImg(imgName)
    inputbox.value='';
    }); 
    
    
    



});