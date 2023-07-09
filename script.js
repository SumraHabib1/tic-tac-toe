console.log("tic tac toe");
let turn="X";
let gameover=false;
const to_change_turn=()=>
{
    return turn==="X"? "0" : "X"
}
//to check win
const to_check_win=()=>{
let boxtext=document.getElementsByClassName('text');
let winning=[
    [0,1,2,-118,-70,0],[2,5,8,-36,10,90],[6,7,8,-108,60,0],[0,3,6,-188,10,90],[0,4,8,-97,10,45],[3,4,5,-108,3,0],[1,4,7,-110,10,90],[2,4,6,-119,10,317]
]
winning.forEach(e=>
    {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='')){
        let empty=document.querySelectorAll('.text');

        if(empty.innerText==="")
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+'DRAW';
  
        }
    
      

        gameover=true;
        if(gameover)
        {
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+'won';
        document.querySelector('.line').style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
        document.getElementsByClassName('info')[0].style.fontsize="100px";
        document.getElementsByClassName('info')[0].style.transition="fontsize 5s linear 5s";
        document.querySelector('.msg').getElementsByTagName('h1')[0].style.display="block";}
        }
        
    })
}
//main logic
let boxes=document.getElementsByClassName("box");
 //as boxes return collection of box so its in an arrray
Array.from(boxes).forEach(element=>
    {
        let boxtext=element.querySelector('.text '); 
        element.addEventListener('click', ()=>
        {
            if(boxtext.innerText==='')
            {
                boxtext.innerText=turn;
                turn=to_change_turn();
                to_check_win();
                if(!gameover){

                    document.getElementsByClassName("info")[0].innerText="turn for" +turn;
                }
            }
        })
    })
    reset.addEventListener('click', ()=>
    {
        let textbox=document.querySelectorAll('.text');
        Array.from(textbox).forEach(element=>
            {
                element.innerText=" ";
                document.querySelector('.msg').getElementsByTagName('h1')[0].style.display="none";
                document.querySelector('.line').style.display="none";
            })
            turn='X';
             gameover=false;
            document.getElementsByClassName("info")[0].innerText="turn for" +turn;
            document.getElementsByClassName('info')[0].style.color="black"

    })