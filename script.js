$('nav li').hover( function () {
    $(this).addClass("animate__animated animate__tada");
});
$('nav li').mouseout( function () {
    $(this).removeClass("animate__animated animate__tada");
});
$('.primary').hover( function () {
    $(this).addClass("animate__animated animate__heartBeat");
})
$('.primary').mouseout( function () {
    $(this).removeClass("animate__animated animate__heartBeat");
});
$('.listSkills div').hover( function () {
    $(this).addClass("animate__animated animate__bounceIn");
})
$('.listSkills div').mouseout( function () {
    $(this).removeClass("animate__animated animate__bounceIn");
});
$('.mobile button').click(function () { 
    $('.mobile i').toggleClass("fa-bars");
    $('.mobile i').toggleClass("fa-x animate__animated animate__fadeIn");
});
$('.cardOccupation').hover( function () {
    $(this).addClass("animate__animated animate__jello");
})
$('.cardOccupation').mouseout( function () {
    $(this).removeClass("animate__animated animate__jello");
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));