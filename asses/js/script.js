  $(document).ready(function(){
  	$('#btnEditar').click(function() {
  		
  		var btnEdite = $('#btnEditar').val();



  	});

  	$('#btnEditar').click(function(){
  		$.post( "paginas/editar.php", function( data ) {
  			$( ".editar" ).html( data );
  		});
  	});

  	$('#btnApagar').click(function(){
  		$.post( "paginas/apagar.php", function( data ) {
  			$( ".editar" ).html( data );
  		});
  	});

  });
  /* fim da função pricipal de carregamento da pagina */