$(document).ready(function () {

  function searchVideo(q, maxResults) {
    var data = {
      maxResults : maxResults,
      key : "AIzaSyCVwFlN3vOjhkEhkQRcpEW-LtL-IGFhiWA",
      part : "snippet",
      q : q,
      type : "video"
    }

    $.getJSON("https://www.googleapis.com/youtube/v3/search", data, function (res) {
      $("#video-list .video").remove();
      $(res.items).each(function () {
        console.log(this);
        var thumbnail = this.snippet.thumbnails.high.url;
        var title = this.snippet.title;
        var description = this.snippet.description;
        var id = this.id.videoId;
        var video = $('<div class="video row" data-video-id="' + id + '"> <div class="thumbnail col-lg-5 col-md-5 col-sm-5 col-12"> <img src="' + thumbnail + '" alt="Thumbail"> </div><div class="video-info col-lg-7 col-md-7 col-sm-7 col-12"> <h3>' + title + '</h3> <div class="description"> <p>' + description + '</p></div></div></div>');
        $("#video-list").append(video);
      });
    });
  }

  $("#desplegar").on("click", function () {
    $("#description").toggle();
  });

  $("#Buscador").on("submit", function (e) {
    e.preventDefault();
    var q = $("#q").val();
    if (q == "") {
      alert("¡Escribe algo para buscar!");
    }
    else {
      searchVideo(q, 25);
      $("#q").val("");
    }
  });

  $(document).on("click", ".video", function () {
    var urlBase = "https://www.youtube.com/embed/";
    var videoId = $(this).attr("data-video-id");
    var video = urlBase + videoId;
    $("iframe").attr("src", video);
  });

});



let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})
 
$(document).ready(function () {

  function searchVideo(q, maxResults) {
    var data = {
      maxResults : maxResults,
      key : "AIzaSyCVwFlN3vOjhkEhkQRcpEW-LtL-IGFhiWA",
      part : "snippet",
      q : q,
      type : "video"
    }

    $.getJSON("https://www.googleapis.com/youtube/v3/search", data, function (res) {
      $("#video-list .video").remove();
      $(res.items).each(function () {
        console.log(this);
        var thumbnail = this.snippet.thumbnails.high.url;
        var title = this.snippet.title;
        var description = this.snippet.description;
        var id = this.id.videoId;
        var video = $('<div class="video row" data-video-id="' + id + '"> <div class="thumbnail col-lg-5 col-md-5 col-sm-5 col-12"> <img src="' + thumbnail + '" alt="Thumbail"> </div><div class="video-info col-lg-7 col-md-7 col-sm-7 col-12"> <h3>' + title + '</h3> <div class="description"> <p>' + description + '</p></div></div></div>');
        $("#video-list").append(video);
      });
    });
  }

  $("#desplegar").on("click", function () {
    $("#description").toggle();
  });

  $("#Buscador").on("submit", function (e) {
    e.preventDefault();
    var q = $("#q").val();
    if (q == "") {
      alert("Â¡Escribe algo para buscar!");
    }
    else {
      searchVideo(q, 5);
      $("#q").val("");
    }
  });

  $(document).on("click", ".video", function () {
    var urlBase = "https://www.youtube.com/embed/";
    var videoId = $(this).attr("data-video-id");
    var video = urlBase + videoId;
    $("iframe").attr("src", video);
  });

});

 $(document).ready(function(){ irArriba(); });
  //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ 
  
  $('body,html').animate({ scrollTop:'1px' },10); });
  
  $(window).scroll(function()
      {
    if($(this).scrollTop() > 1)
    { 
    $('.ir-arriba').slideDown(600); }else{
     $('.ir-arriba').slideUp(0); }
  });
  
  $('.ir-abajo').click(function()
      {
   $('body,html').animate({ scrollTop:'10px' },100
      ); });
}
$(document).ready(function(){
  // Agregue desplazamiento suave a todos los enlaces
  $(".mouse").on('click', function(event) {

    // Asegúrese de que this.hash tenga un valor antes de anular el comportamiento predeterminado
    if (this.hash !== "") {
      // Prevenir el comportamiento predeterminado del clic del ancla
      event.preventDefault();

      // Store hash
      var hash = this.hash;

// Usando el método animate () de jQuery para agregar un desplazamiento suave de la página
// El número opcional (800) especifica la cantidad de milisegundos necesarios para desplazarse al área especificada
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Agregue hash (#) a la URL cuando termine de desplazarse (comportamiento de clic predeterminado)
        window.location.hash = hash;
      });
    } // Fin if
  });
});

//abajo hacia arriba
// fadeIn fadeOut
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});



let caja=document.getElementById("subir__arriba");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})
