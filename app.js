const icon = document.getElementById('icon')
function toggleMenu(){
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-xmark')
    }else{
        icon.classList.replace('fa-xmark','fa-bars')
    }
}