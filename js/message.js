
(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "form" );
	//	var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
		//	output.innerHTML = json;
			var targeturl = "https://api.telegram.org/bot432021077:AAHuUUFPSm-LIdKMb669o2LpXyc0DVoM6KM/sendMessage?chat_id=496555040&text="+json;
			$.ajax({url: targeturl, success: function(result){
					console.log(result);
					alert("Thanks for contacting me, I will get back to you soon!!!");
					form.reset();
		}});
		}, false);

	});


})();
