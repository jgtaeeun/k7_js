
// 버튼 클릭시 글자 나오게 하기
function handleClick(n){
    // document.querySelector("#msg").innerHTML = "<h1>안녕하세요 </h1>" ;

    //handleClick 메서드에  3개의 매개변수 입력  (자바스크립트 백팁 ``)
     document.querySelector("#msg").innerHTML = `<h1>안녕하세요! ${n} </h1>` ;
}





document.addEventListener("DOMContentLoaded" , ()=>{
       // document.getElementById("msg").innerHTML = "안녕하세요";
        //   document.querySelector("#msg").innerHTML = "<h1>안녕하세요</h1>" ;
    
        //alert("hi") ;
        
    
    });
    
