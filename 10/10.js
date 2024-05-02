document.addEventListener('DOMContentLoaded', ()=>{

    const bt=document.querySelector('.checkbt');
    const div10=document.querySelector('.div10');
    
    bt.addEventListener('click' , (e)=>{
        e.preventDefault;
        let arr = [];

        while(arr.length<7){
            let n = Math.floor(Math.random()*45)+1 ;
            if (arr.includes(n)!=true) arr.push(n);      //중복되는 숫자 없도록
        }

        let tags = arr.map((item)=>{
            return `<span class="sp${Math.floor(item/10)}">${item}</span>`   //1~9/10~19/20~29/30~39/40~45
        });
        
        // console.log(tags) 배열의 형태로 출력됨
        tags.splice(6,0,`<span class="spplus">+</span>` );// splice(인덱스시작, 삭제할인덱스, 추가내용)
        tags=tags.join('');                              // ,콤마를 제거
        console.log(tags) 
      
        div10.innerHTML=tags;
        
    });

});