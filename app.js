var button1=document.getElementById('btn')
var input1 = document.getElementsByClassName('int')
var list = document.querySelector('ul')

const callbackfunc = (event) => {
    console.log(input1.value)
    const inputValue = input1.value
    const element = document.querySelector('li')
    const textnode=document.createTextNode(inputValue)
    element.appendChild(textnode)
    list.appendChild(element)
            }
button1.addEventListener('click',callbackfunc)



