let imageIndex = 0;
let imageShowArr = ["cp_default.png", "01_nationalpark_home_bg_nobridge.png", "hero.jpg"];

function changeImage(index) {
    if(imageShowArr[index] === undefined) {
        index = 1;
    }
   let setImg =  $(".slideshow-header > img").attr("src", "images/" + imageShowArr[index]);
   setImg.hide().fadeIn();
  }

  $(".dot").on("click", function () {
    changeImage($(this).index());
  }); 

$('#nav-lang-select').on('mouseover', (e) => {
    e.preventDefault();
    $(e.target).addClass('active');
    $('#lang-select-options').css('display', 'block');
});

$('#nav-lang-select').on('mouseleave', () => {
    $("#nav-lang-select").removeClass('active');
    $('#lang-select-options').hide();
});

