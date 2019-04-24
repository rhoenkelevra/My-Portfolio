// Get the current year for the footer copyright
$('year').text(new Date().getFullYear());

// Auto toggle menus
$('.port-item').click(function(){
    $('.collapse').collapse('hide');
});

