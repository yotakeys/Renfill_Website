const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigate');

toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}