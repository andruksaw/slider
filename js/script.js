// const uktam = new Man({
//    name:'uktam',
//    age:27,
//    lastName:'usmanov'
// })

// const vasya = new Man({
//    name:'вася',
//    age:25,
//    lastName:'петров'
// })

// const vova = new Man({
//    name:'вова',
//    age:24,
//    lastName:'чуркин'
// })
// const lida = new Woman({
//    name:'лида',
//    age:20,
//    lastName:'петрова'
// })

const my1slider = new Slider({
    slider:'.my1slider',
    direction:'Y',
    autoPlay:true,
    time:1000
})
const my2slider = new Slider({
    slider:'.my2slider',
    direction:'X',
    autoPlay:true,
    time:2000
})
const my3slider = new Slider({
    slider:'.my3slider',
    direction:'X',
    autoPlay:false,
    time:500
})

console.log(my1slider)