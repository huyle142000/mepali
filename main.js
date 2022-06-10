var arrowToTop = document.querySelector('.arrowToTop-js')
window.addEventListener('scroll', function(){
    if(window.pageYOffset>700){
        arrowToTop.classList.add('show-arrow')
    }else{
        arrowToTop.classList.remove('show-arrow')
    }
}) 

arrowToTop.addEventListener('click',(toTop) => {
    window.scrollTo(0,0)
})