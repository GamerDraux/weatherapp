window.addEventListener('load', function (){
    console.log ('window loaded');
    defineElementVariables();

})




// function listings

function defineElementVariables (){
    console.log ('defineElementVariables fired');
    let tempBox= document.getElementById('tempBox');
    // console.log ('tempBox variable set to :'+tempBox);
    let precipitationBox=document.getElementById('precipitationBox');
    // console.log ('precipitationBox variable set to: '+precipitationBox);
    let bigBox=document.getElementById('bigBox');
    // console.log ('bigBox variable set to : '+bigBox);
}