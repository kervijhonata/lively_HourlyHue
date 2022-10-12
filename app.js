// Create Div
const div = document.createElement('div')
// Set Properties
div.style.width = window.innerWidth+'px'
div.style.height = window.innerHeight+'px'
div.style.backgroundColor = '#f0c000';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.flexDirection = 'column'
// Append on Body
document.body.appendChild(div)

// Create Labels: Hour and Date
const hourLabel = document.createElement("h1")
const dateLabel = document.createElement("h2")
// Set Label Styles

// Append div element
div.appendChild(hourLabel)
div.appendChild(dateLabel)


// Interval instance that update Data in each second
const hourUpdates = setInterval((e)=>{

    // Hour Time
    var date = new Date() //Instance of local system date
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    
    // Date Time
    var day = date.getDay()
    var month = date.getMonth()
    var year = date.getFullYear()

    // Set text on each text label
    hourLabel.innerText = `Time Now: ${hour}°${minutes}'${seconds}"`
    dateLabel.innerText = `${day}/${month}/${year}`

    // Background Color Variation
    div.style.backgroundColor = `hsl(${Math.floor((360/60)*minutes)},60%,50%)`

},1000)


// Solutions
window.addEventListener('resize', (e)=>{
    const resizeEvent = setTimeout(()=>{
        location.reload(true)
    },1000)
})