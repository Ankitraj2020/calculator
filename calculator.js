var buttons = document.getElementsByClassName("button");
var display = document.getElementById("text1");
var oprend1 =0;
var oprend2 =null;
var operator=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value=='='){
            oprend2=parseFloat(display.textContent);
            var y = eval(oprend1+""+operator+""+oprend2);
            display.innerText = y;
            /*oprend1 = parseFloat(y);
            oprend2=null;
            operator=null;*/
        }else if(value=='+'){
            oprend1 = parseFloat(display.textContent);
            operator='+';
            display.innerText = "";


        }else if(value=='-'){
            oprend1 = parseFloat(display.textContent);
            operator='-';
            display.innerText = "";

        }else if(value=='*'){
            oprend1 = parseFloat(display.textContent);
            operator='*';
            display.innerText = "";

        }else if(value=='/'){
            oprend1 = parseFloat(display.textContent);
            operator='/';
            display.innerText = "";

        }else if(value=='AC'){
            display.innerText=" ";

        }else{
            display.innerText+=value;
        }

    });
}