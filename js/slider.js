// class Human{
//     constructor(x){
//         this.name = x.name
//         this.age = x.age
//         this.lastName = x.lastName
//     }
//     sayFullName(){
//         return `I am ${this.name} ${this.lastName}, I am ${this.age} old!`
//     }
// }
// class Man extends Human{
//     constructor(x){
//         super(x)
//     }
//     gender(){
//         return 'MAN'
//     }
// }
// class Woman extends Human{
//     constructor(x){
//         super(x)
//     }
//     gender(){
//         return 'WOMAN'
//     }
// }



class Slider {
    constructor(x) {
        /* Элементы слайдера */
        this.slider = document.querySelector(x.slider)
        this.sliderLine = this.slider.querySelector('.slider__line')
        this.slides = this.sliderLine.children
        this.prev = this.slider.querySelector('.slider__prev')
        this.next = this.slider.querySelector('.slider__next')
        /* Значения слайдера */
        this.D = x.direction
        this.A = x.autoPlay
        this.H = 500
        this.T = x.time
        this.width = this.slider.clientWidth
        this.moveSize = this.D === 'Y' ? this.H : this.slider.clientWidth
        this.activeSlide = 0
        /* Изменение элементов в слайдере */
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            slide.style = `
                width: ${this.width}px;
                height: ${this.H}px;
            `
            if (i != this.activeSlide) {
                slide.style.transform = `translate${this.D}(${this.moveSize}px)`
            }
            if (i == this.slides.length - 1) {
                slide.style.transform = `translate${this.D}(${this.moveSize * -1}px)`
            }
        }
        this.next.addEventListener('click', () => { this.A = false; this.move(this.next) })
        this.prev.addEventListener('click', () => { this.move(this.prev) })
   
        this.interval = null
        if (this.A === true) {
            this.interval = setTimeout(()=>{
                this.move(this.next)
            },this.T)
        }
        this.slider.onmouseenter = () => {
            clearTimeout(this.interval)
        }
        if (this.A === true) {
            this.slider.onmouseleave = () => {
                this.A = true
                this.interval = setTimeout(() => {
                    this.move(this.next)
                }, this.T)
            }
        }
    }
    move(btn) {
        let leftOrRight = btn === this.next ? this.moveSize * -1 : this.moveSize//Определяет в какую сторону двигать слайд
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = `${0}ms`
            if (i != this.activeSlide) {
                this.slides[i].style.transform = `translate${this.D}(${leftOrRight * -1}px)`
                // Передвигает в ту сторону откуда выежает слайдер 
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.D}(${leftOrRight}px)`
        this.slides[this.activeSlide].style.transition = `${this.T}ms`
        if (btn === this.next) {
            this.activeSlide++
            if (this.activeSlide >= this.slides.length) {//если дошло до конца всех слайдов перейдет на первый слайд
                this.activeSlide = 0
            }
        } else if (btn == this.prev) {
            this.activeSlide--
            if (this.activeSlide < 0) {// если слайд на первом елемнте и мы крутим его назад то переходим на последний элемент
                this.activeSlide = this.slides.length - 1
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.D}(${0}px)`
        this.slides[this.activeSlide].style.transition = `${this.T}ms`

        btn.disabled = true
        setTimeout(() => {
            btn.disabled = false
        }, this.T)

        if (this.A === true && btn === this.next) {
            this.interval = setTimeout(() => {
                this.move(this.next)
            }, this.T)
        }
    }
}