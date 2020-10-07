
    

    function trigger() {
       

        var input = document.querySelector('#input').value;
    var totalAmount = 0;
    var spin = 0;
    console.log(input);
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var attr = document.querySelector('.img1');
    attr.src = "images/dice" + randomNumber + ".png"
    for(var i = 0; i >= 50; i++) {
        if(randomNumber % 2 == 0) {
            totalAmount = parseInt(input) + 1;
            spin++;
         }
         else {
             totalAmount = parseInt(input) - 0.5;
             spin++;
         }
    }
   

    document.querySelector('.display').innerHTML = "Total " + totalAmount;
    document.querySelector('.spin').innerHTML = "Attempts " + spin;
    
}


