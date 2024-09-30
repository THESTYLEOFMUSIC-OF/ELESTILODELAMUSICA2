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
      alert("¡Escribe algo para buscar!");
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
