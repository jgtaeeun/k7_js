document.addEventListener('DOMcontentLoaded', ()=>{

   const bts = document.querySelectorAll('.bt7');
   const txt1 =document.querySelector('#txt1');
   const txt2 =document.querySelector('#txt2');
  
   bts[0].addEventListener('click', (e)=>{
    console.log(text1.value)
    e.preventDefault();
       
        
    //     let t1 =[...text1.value];
    //     let t2 = [];
       
    //     for(let i = t1.length-1 ; i>=0 ; i--){
    //      t2.push(t1[i]);
    //     }
    // // // 비교 :  배열
    //     for(let i = 0 ; i<t1.length; i++){
    //          if (t1[i]!=t2[i]){
    //           text2.value="회문이 아닙니다.";
    //           break;
    //         }
    //         else text2.value="회문입니다.";
    //     }
    // t1 = t1.join('');
    // t2 = t2.join('');
    // if (t1===t2) text2.value="회문입니다.";
    // else text2.value="회문 아닙니다.";

    // //--------------------
    // let a = text1.value;
    // let b = text1.value.split('').reverse().join('');
    // if (t1===t2) text2.value="회문입니다.";
    // else text2.value="회문 아닙니다.";





//    });
//    bts[1].addEventListener('click', (e)=>{
//     e.preventDefault();

//     // for (let i = 0 ; i< text1.value.length ; i++){
//     //     console.log(text1.value[i])
//     // }
//        let total = 0;
//        for (let c of text1.value){
//            if(c>='0' && c<=9){
//             total=total +parseInt(c);
//            }
//        }
//        text2.value=total;

    });

});