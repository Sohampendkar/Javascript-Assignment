
    let inputValue = $('textBox').val();
    
    $('#textBox').focusout(function(){
        $(this).addClass('error')
    })
    // $('#textBox').over(function(){
    //     $(this).addClass('newStyle')
    // })
    let maxlength = 10;
    let inputlength = inputValue.length
    if(inputlength > maxlength){
        
            $('#textBox').addClass('error')
    }
    //see output