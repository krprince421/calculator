var x = 0 ;

function digitClick( x ){
    document.getElementById('expression').value += x ;
}

function clearExpression(){
    document.getElementById('expression').value = '' ;
}
function changeSign(){
    var equation = document.getElementById('expression').value ;
    if( ! isNaN( equation) ){
        document.getElementById('expression').value *= -1 ;
    }
}

function printResult(){
    var equation = document.getElementById('expression').value ;
    try{
        document.getElementById("expression").value = eval( equation ) ;
    }catch( err ){
        document.getElementById("expression").value = "Invalid Expression" ;   
        
    }
        
}

function myFunction(){

    var input = document.getElementById('expression') ;

    input.addEventListener("keypress" , function(event){
        if( event.key === 'Enter' )printResult() ;
        if( event.key === '=' ){
            printResult() ;

        }
        
    }) ;


}


