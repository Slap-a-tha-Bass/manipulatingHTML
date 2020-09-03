$('body').append('<button id="topbtn">Sweet Button!</button>');
$('body').append('<form></form>');
$('form').append('<input id="searchInput"></input>');
$('form').append('<button id="bottombtn">Submit</button>');
$('body').append('<div class="div"></div>');
$('div').css('padding', '10px');
$('div').css('background-color', 'green');
$('body').append('<p>This is a paragraph!</p>');
$('body').append('<button id="name" >Name Generator</button>');
$('body').append('<div id="div"></div>');

$('#topbtn').click(function(){
    alert('What a cool guy you are!');
})

$('.div').mouseover(function(){
    $('.div').css('background-color', 'red');
})
$('.div').mouseleave(function(){
    $('.div').css('background-color', 'green');
})

$('p').click(function(){
    $('p').css('color',pColor());
})
$('#name').click(function(){
    $('#div').append('Corey');
})

let searchInput = $('#searchInput');
$('form').submit(function(e){
    e.preventDefault();
    let input = searchInput.val();
    alert('You have entered:' + input);
    searchInput.val("");
})
$('body').append('<button id="friends">Friend Name Generator</button>');
let friends = ['Steven', 'Bob', 'John', 'Merritt', 'Philip', 'Justin', 'Mary Beth', 'Brenden', 'Jeff', 'Thomas'];
let counter = 0;
let friendBtn = $('#friends');

$('body').append('<ul></ul>');
friendBtn.click(function(){
    if (counter < friends.length){
        let li = $('<li></li>');
        li.text(friends[counter]);
        $('ul').append(li);
        counter++;
    };
})

// functions
function pColor() {
    let colors = ['red', 'blue', 'purple', 'yellow', 'green', 'orange'];
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}