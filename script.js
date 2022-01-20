function addNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  let product = firstNum + secondNum

  //output
  document.getElementById('result').innerHTML = product
}


function subNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  let product = firstNum - secondNum

  //output
  document.getElementById('result').innerHTML = product
}


function multNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  let product = firstNum * secondNum

  //output
  document.getElementById('result').innerHTML = product
}


function divNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  let product = firstNum / secondNum

  //output
  document.getElementById('result').innerHTML = product
}


function expNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  let product = firstNum ** secondNum

  //output
  document.getElementById('result').innerHTML = product
}


function modNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  let product = firstNum % secondNum

  //output
  document.getElementById('result').innerHTML = product
}


function incNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  firstNum ++ 

  //output
  document.getElementById('result').innerHTML = firstNum
}


function decNum(){
  //input
  let firstNum = Number(document.getElementById('FirstNum').value)
  let secondNum = Number(document.getElementById('SecondNum').value)

  //process
  firstNum -- 

  //output
  document.getElementById('result').innerHTML = firstNum
}

