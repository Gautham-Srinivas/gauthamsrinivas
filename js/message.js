
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
		console.log(json)
			var targeturl = "https://aback-fir.glitch.me/message/?text="+json;
			$.ajax({
			    url : targeturl,
			    type : 'GET',
			    data : ' ',
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			    success : function(data) {
            
			      alert("Thanks for contacting me, I will get back to you soon!!!");

			    },
			    error : function(request,error)
			    {
			        alert("Thanks!!! Reach me out in linkedin for quick response");
			    }
			});

		}, false);

	});


})();
