$(document).ready(function(){
        
    //activa/desactiva la barra de busqueda.
    $(".busqueda").click(function(){
      if( !$(".navegacion-principal ul").hasClass("hide") ){
        $(".navegacion-principal ul").addClass("hide");
        $(".busqueda-activada").removeClass("hide");
      }
      $("body>div, main, footer").click(function(){
        $(".navegacion-principal ul").removeClass("hide");
        $(".busqueda-activada").addClass("hide");
      });
    });

    //activa/desactiva el selector de idioma
    $("#selector-lenguaje").click(function(){
      if( $(".lenguaje-contenedor").hasClass("hide") ){
        $(".lenguaje-contenedor").removeClass("hide");
      }else{
        $(".lenguaje-contenedor").addClass("hide");
      }
    });

  });