import logo from './static/logo.jpeg'
document.write('mamammamam')
let dom = document.querySelector('#app')

document.querySelector('#app').innerHTML = `<div>
<h1>杨若兰傻蛋！</h1>
<p>瓦达多所多<a>叽叽叽叽</a></p>
</div>`


dom.append('<span>sdfsd</span>')
dom.getElementsByTagName('p')[0].style.background = 'red';
dom.getElementsByTagName('p')[0].addEventListener('click', function(){
    console.log('p')
},true)
dom.style.background = 'pink'
dom.addEventListener('click', function(){
    console.log(8888888888888888)
})

let img = document.createElement('img');
img.src = logo;
dom.appendChild(img)
class A{
    constructor(a){
        console.log(a)
    }

    getX(){
        console.log(88)
    }
}



 let n = new A(1)
 console.log(n)




 console.log([1,2,3].includes(1))
 console.log('appp'.includes('p'))

