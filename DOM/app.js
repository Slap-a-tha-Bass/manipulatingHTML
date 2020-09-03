window.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Sweet Button!');
    let form = document.createElement('form');
    let inputText = document.createElement('input');
    let inputSubmit = document.createElement('button');
    let inputSubmitText = document.createTextNode('Submit');
    let div = document.createElement('div');
    let divText = document.createTextNode('YO');
    let p = document.createElement('p');
    let pText = document.createTextNode('This is a paragraph.');
    let divBtn = document.createElement('button');
    let divBtnText = document.createTextNode('Name Generator');
    let div2 = document.createElement('div');
    let nameBtn = document.createElement('button');
    let nameBtnText = document.createTextNode('Friend Name Generator');
    let ul = document.createElement('ul');

    inputText.type = "text";
    inputText.id = "searchInput";
    inputSubmit.id = "submitbtn";



    btn.appendChild(btnText);
    document.body.appendChild(btn);
    form.appendChild(inputText);
    form.appendChild(inputSubmit);
    inputSubmit.appendChild(inputSubmitText);
    document.body.appendChild(form);
    div.appendChild(divText);
    document.body.appendChild(div);
    p.appendChild(pText);
    document.body.appendChild(p);
    divBtn.appendChild(divBtnText);
    document.body.appendChild(divBtn);
    document.body.appendChild(div2);
    nameBtn.appendChild(nameBtnText);
    document.body.appendChild(nameBtn);
    document.body.appendChild(ul);


    div.style.color = 'red';
    div.style.backgroundColor = div.style.color;

    btn.onclick = function(){
        alert('What an awesome person you are!');
    }
    div.onmouseover = function () {
        div.style.backgroundColor = 'blue';
        div.style.color = div.style.backgroundColor;
    }
    div.onmouseleave = function () {
        div.style.color = 'red';
        div.style.backgroundColor = div.style.color;
    }
    p.onclick = function () {
        p.style.color = pColor();
    }
    function pColor() {
        let colors = ['red', 'blue', 'purple', 'yellow', 'green', 'orange'];
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    let submitBtn = document.getElementById('submitbtn');
    let searchInput = document.getElementById('searchInput');

    submitBtn.onclick = function (e) {
        e.preventDefault();
        let text = searchInput.value;
        alert('You entered: ' + text);
        searchInput.value = "";
        // searchInput.remove();
    }


    //      // This function HAS to run before the submit button on the form is clicked. That is why this is outside and prior to that function.
    // let searchInput = $('#searchInput');
    // searchInput.keyup(function () {
    //     // Also, I previously had the let text = searchInput.val(); outside of the function. You have to grab the value on EVERY keyup since it always changes.
    //     let text = searchInput.val();
    //     if (text === '') {
    //         $('.submitbtn').prop('disabled', true);
    //     } else {
    //         $('.submitbtn').prop('disabled', false);
    //     }
    // })

    divBtn.onclick = function () {
        let empty = document.createElement('span');
        let emptyText = document.createTextNode('Corey');
        empty.appendChild(emptyText);
        document.body.appendChild(empty);
        div2.appendChild(emptyText);
    }
    let friends = ['Steven', 'Bob', 'John', 'Merritt', 'Philip', 'Justin', 'Mary Beth', 'Brenden', 'Jeff', 'Thomas'];
    let counter = 0;

    nameBtn.onclick = function () {
        if (counter < friends.length) {
            let li = document.createElement('li');
            li.textContent = friends[counter];
            ul.appendChild(li);
            counter++;
        }


    }
})