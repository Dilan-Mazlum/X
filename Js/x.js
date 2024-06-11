document.addEventListener('DOMContentLoaded', function() {
    var buttons = [
        {buttonId: 'chatButton', countId: 'chatCount'},
        {buttonId: 'repeatButton', countId: 'repeatCount'},
        {buttonId: 'favoriteButton', countId: 'favoriteCount'},
        {buttonId: 'chartButton', countId: 'chartCount'},
        {buttonId:'chatButton1', countId:'chatCount1'},
        {buttonId: 'repeatButton1', countId: 'repeatCount1'},
        {buttonId: 'favoriteButton1', countId: 'favoriteCount1'},
        {buttonId: 'chartButton1', countId: 'chartCount1'},
        {buttonId:'chatButton2', countId:'chatCount2'},
        {buttonId: 'repeatButton2', countId: 'repeatCount2'},
        {buttonId: 'favoriteButton2', countId: 'favoriteCount2'},
        {buttonId: 'chartButton2', countId: 'chartCount2'},       
    ];
  

    buttons.forEach(function(item) {
        var button = document.getElementById(item.buttonId);
        if (button) {
            button.addEventListener('click', function() {
                increaseCount(item.countId, this);
            });
        } else {
            console.error(`Element with ID ${item.buttonId} not found`);
        }
    });

    function increaseCount(countId, element) {
        var countElement = document.getElementById(countId);
        if (countElement) {
            var count = parseInt(countElement.textContent);
            count++;
            countElement.textContent = count;

        } else {
            console.error(`Element with ID ${countId} not found`);
        }
    }
});


const happend=document.querySelector('#wht');
happend.addEventListener("focus",whtHappend);

function whtHappend(){
    console.log('odaklandı');

};

const sendBtn = document.querySelector('.btn-what-send');
const happen=document.querySelector('#wht');

happen.addEventListener('keypress',function(){

    if ( sendBtn===null){
        sendBtn.style.backgroundColor='rgb(29, 155, 240)'
       
    } else{
        sendBtn.style.backgroundColor='#199cf3'
        sendBtn.style.cursor='pointer'

    }
   console.log('Submit');
});



var repeatButton = document.getElementById('repeatButton');
var dropList = document.querySelector('.dropList');

    repeatButton.addEventListener('click', function() {
        if (dropList.style.display === 'none' || dropList.style.display === '') {
            dropList.style.display = 'block';
        } else {
            dropList.style.display = 'none';
        }
    });

