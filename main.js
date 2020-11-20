const toggleBtn = document.querySelector('.fa-bars')
const navBar = document.querySelector('.nav-bar')
const navLink = document.querySelectorAll('.nav-link')
function iconCheck(){
    if(toggleBtn.classList.contains('fa-bars') == true){
        toggleBtn.classList.remove('fa-bars')
        toggleBtn.classList.add('fa-times')
        }else{
            toggleBtn.classList.add('fa-bars')
            toggleBtn.classList.remove('fa-times')
        }
}
for(let i = 0;i < navLink.length; i++){
    navLink[i].addEventListener('click', () => {
        iconCheck()
        navBar.classList.remove('active')
    })
}
toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active')
    iconCheck()
})