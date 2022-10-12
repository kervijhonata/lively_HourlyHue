const div = document.createElement('div')
div.style.width = window.innerWidth+'px'
div.style.height = window.innerHeight+'px'
// div.style.backgroundColor = '#f0c000';


const body = {
    element: document.body,
    style: {
        backgroundColor: 'blue',
        margin: '0'
    }
}

for(let styleProperty in body.style){
    console.log(styleProperty + ": " +body.style[styleProperty])
    div.style.styleProperty = body.style[styleProperty]
}

document.body.appendChild(div)