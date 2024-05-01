document.addEventListener('DOMContentLoaded',()=>{
   const bts=document.querySelectorAll('.bt8');
   const txt2=document.querySelector('#txt2');
   const txt1=document.querySelector('#txt1');
   
   bts[0].addEventListener('click', (e)=>{
        e.preventDefault();
       //방법1
    //     let t1=[...txt1.value];
    //     let t2=[];
        
    //    for(let i=t1.length-1;i>=0;i--){
    //     t2.push(t1[i]);
    //    }

    //     t1=t1.join('');
    //     t2=t2.join('');
    //     if(t1===t2) txt2.value="회문입니다.";
    //     else  txt2.value="회문이 아닙니다.";

    //방법2
       let a=txt1.value;
       let b=txt1.value.split('').reverse().join('');
       if(a===b) txt2.value="회문입니다.";
       else  txt2.value="회문이 아닙니다.";

   });
   bts[1].addEventListener('click', (e)=>{

    e.preventDefault();
    let total=0;
    for(let c of txt1.value){
        if((c>=1)&&(c<=9)) total=total+parseInt(c);
    }
    txt2.value=total;

   });

   



});
