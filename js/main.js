//RANDOMISING SQUARES
let numbers=[24,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];//Array with numbers, so they won't get drawn twice=
function rand(){//function that draws one index of the array above
    return Math.floor(Math.random()*numbers.length);
}

let string='<main>';
for(let i=1;i<=24;i++){
    temp = numbers.splice(rand(),1)[0];//splice - a function that returns specified element of array and removes it
    string+=`<div id="day${temp}" class="day"><img class="img" src="img/png/${temp}.png" alt="dzień ${temp}"></div>`;//html text for shuffled squares
}
string+='</main>';

//CLICKING & OTHER EVENTS
const body=document.getElementById('body');
const alert = document.getElementById('alert');
d = new Date();// some variables and constants
document.getElementById('flexparent').innerHTML=string;//inserting html code with shuffled squares

for(let i=1;i<=24;i++){
    let id=`day${i}`;
    document.getElementById(id).addEventListener('click',function(){
        alert.style.display='flex';// if clicked it shows up
        let content="Cierpliwości, wkrótce będziesz mógł to przeczytać ; )";
        if (days[i]['day']<=(d.getDate()))
            content=days[i]['message'];
        alert.innerHTML=`<button onclick="document.getElementById('alert').style.display='none';">X</button><p>${content}</p>`;

        if(days[i]['day']==15){// smaller font size for the longest text
            if(body.classList.contains('mobile'))
                alert.style.fontSize='1.8vh';
            else
                alert.style.fontSize='1.5em';
        }
    })
}


if(screen.width<screen.height)// mobile styling
    body.className = 'mobile';
