var d = document;

d.querySelector('.home').addEventListener('click', ()=>{
    d.querySelector('.main').style.display = 'flex'
    d.querySelector('.discovered_sit').style.display = 'none'
    d.querySelector('.about_sit').style.display = 'none'
    d.querySelector('.text_about').style.display = 'none'
});
d.querySelector('.about').addEventListener('click', ()=> {
    d.querySelector('.main').style.display = 'none'
    d.querySelector('.discovered_sit').style.display = 'none'
    d.querySelector('.about_sit').style.display = 'flex'
    d.querySelector('.text_about').style.display = 'block'
});
d.querySelector('.discodered').addEventListener('click', ()=> {
    d.querySelector('.main').style.display = 'none'
    d.querySelector('.discovered_sit').style.display = 'flex'
    d.querySelector('.about_sit').style.display = 'none'
    d.querySelector('.text_about').style.display = 'none'

});

