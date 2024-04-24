const btCreate = (bt, idText, captionNode, parentNode)=>{
    bt.setAttribute('id', idText);
    bt.appendChild( captionNode);
    parentNode.append(bt);
}


document.addEventListener('DOMContentLoaded', ()=>{
     console.log('DOM 완성');
    
     const msg = document.querySelector('#msg') ;

     const btDiv = document.getElementById('btDiv');


     const bt1 = document.createElement('button');         // 변수선언(const 상수 선언)
     const bt1Txt = document.createTextNode('버튼11');   //버튼의 속성
  // bt1.setAttribute('id', 'bt11');
  // bt1.appendChild( bt1Txt);                      //버튼태그 안에 text있는 거를 표현<button>text</button>
  // btDiv.append(bt1);

   
     const bt2 = document.createElement('button');
     const bt2Txt=document.createTextNode('버튼22');
  // bt2.setAttribute('id','bt22');
  // bt2.appendChild( bt2Txt);
  // btDiv.append(bt2);

     btCreate(bt1, 'bt11' , bt1Txt,  btDiv);
     btCreate(bt2, 'bt22' , bt2Txt,  btDiv);

     bt1.addEventListener('click' , ()=>{
          msg.innerHTML = '<h1>안녕하세요</h1>';
         // if    (msg.innerHTML == ''){
         //   msg.innerHTML = `<h1>안녕하세요</h1>`;
         // }
         // else 
          //  msg.innerHTML = '';  

     });

     bt2.addEventListener('click' , ()=>{
           msg.innerHTML = ' ';
     });

});



