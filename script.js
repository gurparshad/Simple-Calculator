function getHistory(){
  return document.getElementById("history-value").innerText;
}

function printHistory(num){
  document.getElementById("history-value").innerText = num;
}

function getoutput(){
  return document.getElementById("output-value").innerText;
}

function printOutput(num){

    document.getElementById("output-value").innerText = getFormattedNumber(num);

}

function getFormattedNumber(num){
  if(num == "-"){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num)   // for converting string to number and also change format.
{
  return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i = 0;i<operator.length; i++){
  operator[i].addEventListener('click',function(){
    if(this.id=="clear"){
      printOutput("");
      printHistory("");
    }
    else if(this.id == "backspace"){
      var output = reverseNumberFormat(getoutput()).toString();
      if(output){ // output has a value.
        output = output.substr(0,output.length-1);
        printOutput(output);
      }
    }

    else{
      var output = getoutput();
      var history = getHistory();
      if(output!=""){
        output = reverseNumberFormat(output);
        history=history+output;  // here we are doing concatenation.
        if(this.id == "="){
          var result=eval(history);
          printOutput(result);
          printHistory("");
        }
        else{
          history = history+this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for(var i = 0;i<number.length; i++){
  number[i].addEventListener('click',function(){
    var output = reverseNumberFormat(getoutput());
    if(output!=NaN){  // if output is a number
      output = output+this.id;
      printOutput(output);
    }
  });
}
