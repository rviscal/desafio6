
function preview(id){
document.getElementById(id).style.display = 'flex';
var ele = document.getElementsByTagName('input');
var nome = document.querySelector("#nome");
var sobrenome = document.querySelector("#sobrenome");
var msg = document.querySelector("#menssagem");
var rodape1 = document.querySelector("#att");
var rodape2 = document.querySelector("#rod");


    for(i = 0; i < ele.length; i++) {
        
        if(ele[i]) {
            if(ele[i].checked)
                document.getElementById("txtrect").innerHTML
                    = ele[i].value + " " + nome.value + " " + sobrenome.value + "<br>" + msg.value
                    + "<br>" + rodape1.innerHTML + "<br>" + rodape2.innerHTML;
        }
    }
}

function img1(id){
    document.getElementById(id).style.background = "url('img/1.jpg') no-repeat center ";
    
}

function img2(id){
    document.getElementById(id).style.background = "url('img/2.jpg') no-repeat center ";
}

function img3(id){
    document.getElementById(id).style.background = "url('img/3.jpg') no-repeat center ";
}
function img4(id){
    document.getElementById(id).style.background = "url('img/4.jpg') no-repeat center ";
}



  
   
