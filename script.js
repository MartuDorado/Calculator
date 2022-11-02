let nums = document.getElementsByClassName("num");

let result = document.getElementById("result");

const equal = document.getElementById("equal");

const reset = document.getElementById("reset");

let sim = document.getElementsByClassName("simb");

let num1 = 0;



Array.from(nums).forEach(function(num){
    num.addEventListener("click",function(){
        result.innerHTML += num.textContent;
    });
});

Array.from(sim).forEach(function(s){
    s.addEventListener("click", function(e){
        if(s.textContent === "x"){
            num1 = result.textContent + "*";
            result.innerHTML ="";
        }else{
     num1 = result.textContent + s.textContent; 
     
     result.innerHTML ="";}
     });
    
});

equal.addEventListener("click", function(e){
    num1 += result.textContent;
    result.innerHTML = eval(num1);
    
})

reset.addEventListener("click", function(e){
    result.innerHTML = "";
});



