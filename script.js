function clicked(e) {
    alert("Account Created");
    e.preventdefault();
}

//--------------------------animation-------------------

$(document).ready(function(){
    $('.image1').waypoint(function(direction){
        $('.image1').addClass('animated zoomIn')
    }, {
        offset:'50%'
    });

    $('.subcontent1').waypoint(function(direction){
        $('.subcontent1').addClass('animated fadeInUpBig')
    }, {
        offset:'50%'
    });

    $('.card-1').waypoint(function(direction){
        $('.card-1').addClass('animated fadeInLeftBig')
    }, {
        offset:'50%'
    });

    $('.card-2').waypoint(function(direction){
        $('.card-2').addClass('animated fadeInRightBig')
    }, {
        offset:'50%'
    });

    $('.imageGallery').waypoint(function(direction){
        $('.imageGallery').addClass('animated flipInX')
    }, {
        offset:'50%'
    });

    $('.firstbox').waypoint(function(direction){
        $('.firstbox').addClass('animated fadeInRightBig')
    }, {
        offset:'50%'
    });

    $('.secondbox').waypoint(function(direction){
        $('.secondbox').addClass('animated fadeInDown')
    }, {
        offset:'50%'
    });

    $('.image5').waypoint(function(direction){
        $('.image5').addClass('animated zoomIn')
    }, {
        offset:'50%'
    });

    $('.subcontent5').waypoint(function(direction){
        $('.subcontent5').addClass('animated bounce')
    }, {
        offset:'50%'
    });

    $('.content6').waypoint(function(direction){
        $('.content6').addClass('animated bounceInUp')
    }, {
        offset:'50%'
    });


})




function sidebarDisplay(){
    document.getElementById('sidemenu').style.width="260px";
   
}

function closeDisplay(){
    document.getElementById('sidemenu').style.width="0px";
}

 

 