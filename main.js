

//var ubicacion = new Localizacion();

function initMap(){

	const ubicacion = new Localizacion(()=>{

		const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};

		var texto = '<h1>Nombre del lugar</h1>' + '<p>Descripción del lugar</p>' + '<a href="https://www.google.com">Página web</a>';




		const options = {
			center: myLatLng,
			zoom: 17
		}

		var map = document.getElementById("map");

		const mapa = new google.maps.Map(map, options);


		const marcador = new google.maps.Marker({

			position: myLatLng,
			map: mapa,
			title: "Mi primer marcador"
		});


		const marcador2 = new google.maps.Marker({

			position: {lat:  -2.171044, lng:  -79.906502
			},
			map: mapa,
			title: "Mi segundo marcador"
		});


		var informacion = new google.maps.InfoWindow({
			content: texto
		});

		marcador.addListener('click', function(){
			informacion.open(mapa, marcador);	
		});


	});

}

//console.log(ubicacion);
//console.log("wtf");