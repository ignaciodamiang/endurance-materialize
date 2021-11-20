$(document).ready(function(){
        
    //activa la barra de busqueda.
  $(".busqueda").click(function(){
    if( !$(".navegacion-principal ul").hasClass("hide") ){
      $(".navegacion-principal ul").addClass("hide");
      $(".busqueda-activada").removeClass("hide");
    }
  });

    //activa/desactiva el selector de idioma
  $(".selector-lenguaje").click(function(){
    if( $(".lenguaje-contenedor").hasClass("hide") ){
      $(".lenguaje-contenedor").removeClass("hide");
    }else{
      $(".lenguaje-contenedor").addClass("hide");
    }
  });

    //activa/desactiva el cuadro de usuario
  $(".control-usuario").click(function(){
    if( $(".usuario-contenedor").hasClass("hide") ){
      $(".usuario-contenedor").removeClass("hide");
    }else{
      $(".usuario-contenedor").addClass("hide");
    }
  });

    //desactiva a los tres de arriba al dar click afuera.
  $("body>div, main, footer").click(function(){
    if( !$(".usuario-contenedor").hasClass("hide") ){
      $(".usuario-contenedor").addClass("hide");
    }
    if( $(".navegacion-principal ul").hasClass("hide") ){
      $(".navegacion-principal ul").removeClass("hide");
      $(".busqueda-activada").addClass("hide");
    }
    if( !$(".lenguaje-contenedor").hasClass("hide") ){
      $(".lenguaje-contenedor").addClass("hide");
    }
  });


  //CREA TU CALZADO
  //activa los cuadros de opciones de crea tu calzado
  $(".bl-izquierda.boton-edit-calzado").click(function(){
    $(".bl-izquierda").removeClass("hide");
    $(".bl-izquierda.boton-edit-calzado").addClass("hide");
  });
  $(".bh-inferior.boton-edit-calzado").click(function(){
    $(".bh-inferior").removeClass("hide");
    $(".bh-inferior.boton-edit-calzado").addClass("hide");
  });
  $(".bl-derecha.boton-edit-calzado").click(function(){
    $(".bl-derecha").removeClass("hide");
    $(".bl-derecha.boton-edit-calzado").addClass("hide");
  });

  //desactiva los cuadros de opciones de crea tu calzado
  $(".cerrar-bl-i").click(function(){
    $(".bl-izquierda").addClass("hide");
    $(".bl-izquierda.boton-edit-calzado").removeClass("hide");
  });
  $(".cerrar-bh-i").click(function(){
    $(".bh-inferior").addClass("hide");
    $(".bh-inferior.boton-edit-calzado").removeClass("hide");
  });
  $(".cerrar-bl-d").click(function(){
    $(".bl-derecha").addClass("hide");
    $(".bl-derecha.boton-edit-calzado").removeClass("hide");
  });
});