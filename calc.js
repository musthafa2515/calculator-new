function displaydata(e){
   result.value+=e
}

function out(){
     result.value=eval(result.value)
}
function Allclear(){
    result.value=""
}
function backspace(){
   result.value= result.value.slice(0,-1)
}