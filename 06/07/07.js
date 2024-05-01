//선택박스는 change
const show = (s1,s2,l1, l2)=>{
    if(s1.value =='°C')
    {s2.value ='°f';
    }else {s2.value ='°C'}
    l1.textContent  =s1.value ;
    l2.textContent  =s2.value;

}


document.addEventListener('DOMContentLoaded', ()=>{
  //섭씨선택시 화씨온도의 레이블과 셀렉 박스 바꾸기
   //화씨선택시 섭씨온도의 레이블과 셀렉 박스 바꾸기
  const sel1 = document.querySelector("#ct");
  const sel2 = document.querySelector("#ft");

  const text1 = document.querySelector("#inputct");
  const text2 = document.querySelector("#inputft");
   
  const la1 =document.querySelector("#ctlabel");
  const la2 =document.querySelector("#ftlabel");

  //선택박스는 change
  sel1.addEventListener("change" , ()=>{

    show(sel1,sel2,la1, la2)
    console.log(sel1.value, sel2.value)
    // if(sel1.value =='°C') {
    //     sel2.value ='°f';
    //     la2.textContent  ='°f';
    //     la1.textContent  ='°C';
    // }
    // else{
    //     sel2.value ='°C';
    //     la2.textContent  ='°C';
    //     la1.textContent  ='°f';
    // }
  });
  sel2.addEventListener("change" , ()=>{
    show(sel2,sel1,la2, la1)
    console.log(sel1.value, sel2.value)
    // if(sel2.value =='°C') {
    //     sel1.value ='°f';
    //     la2.textContent  ='°C';
    //     la1.textContent  ='°f';
    // }
    // else{
    //     sel1.value ='°C';
    //     la2.textContent  ='°f';
    //     la1.textContent  ='°C';
    // }
  });
  
});