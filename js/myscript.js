// metodo de cliente

function traerDisfraz(){
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"GET",
        datatype:"JSON",
		
		success : function(disfraz){
			let ds=disfraz.items;
			$("#listaDisfraces").empty();

			for(i=0;i<ds.length;i++){
				$("#listaDisfraces").append(ds[i].id+"<b> "+ds[i].brand+"</b> "+ds[i].model+" "+ds[i].category_id+" "+ds[i].name);
				$("#listaDisfraces").append("<button onclick='borrarDisfraz("+ds[i].id+")'>Borrar</button><br>"); 
	
			}
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		}
	
	});
	
}

function guardarDisfraz(){
	let iddisfraz=$("#id").val();
	let marcadisfraz=$("#brand").val();
	let modelodisfraz=$("#model").val();
	let categoriadisfraz=$("#category_id").val();
	let nombredisfraz=$("#name").val();

	let datadisfraces={
		id:iddisfraz,
		brand:marcadisfraz,
		model:modelodisfraz,
		category_id:categoriadisfraz,
		name:nombredisfraz

	};

	let dataToSend2=JSON.stringify(datadisfraces);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"POST",
        datatype:"JSON",
		data:dataToSend2,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");
			$("#name").val("");		
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},
		complete : function(){
			traerDisfraz();
		}
	
	});

}

function editarDisfraz(){
	let iddisfraz=$("#id").val();
	let marcadisfraz=$("#brand").val();
	let modelodisfraz=$("#model").val();
	let categoriadisfraz=$("#category_id").val();
	let nombredisfraz=$("#name").val();

	let datadisfraces={
		id:iddisfraz,
		brand:marcadisfraz,
		model:modelodisfraz,
		category_id:categoriadisfraz,
		name:nombredisfraz

	};

	let dataToSend2=JSON.stringify(datadisfraces);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"PUT",
        datatype:"JSON",
		data:dataToSend2,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");
			$("#name").val("");				
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},

		complete : function(){
			traerDisfraz();
		}
		
	});

}

function borrarDisfraz(iddisfraz){
	let datadisfraces={
		id:iddisfraz,
	};
	let dataToSend2=JSON.stringify(datadisfraces);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"DELETE",
        datatype:"JSON",
		data:dataToSend2,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");
			$("#name").val("");		
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},

		complete : function(){
			traerDisfraz();
		}
	
	});

}

// metodos de cliente

function traerCliente(){
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type:"GET",
        datatype:"JSON",
		
		success : function(clientes){
			let cs=clientes.items;
			$("#listaClientes").empty();

			for(i=0;i<cs.length;i++){
				$("#listaClientes").append(cs[i].id+"<b> "+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
				$("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>"); 
			}
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		}
	
	});
	
}

function guardarCliente(){
	let idcliente=$("#id").val();
	let nombrecliente=$("#name").val();
	let correocliente=$("#email").val();
	let edadcliente=$("#age").val();
	
	let data={
		id:idcliente,
		name:nombrecliente,
		email:correocliente,
		age:edadcliente

	};

	let dataToSend=JSON.stringify(data);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type:"POST",
        datatype:"JSON",
		data:dataToSend,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");		
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},
		complete : function(){
			traerCliente();
		}
	
	});

}

function editarCliente(){
	let idcliente=$("#id").val();
	let nombrecliente=$("#name").val();
	let correocliente=$("#email").val();
	let edadcliente=$("#age").val();
	
	let data={
		id:idcliente,
		name:nombrecliente,
		email:correocliente,
		age:edadcliente

	};

	let dataToSend=JSON.stringify(data);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type:"PUT",
        datatype:"JSON",
		data:dataToSend,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");		
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},

		complete : function(){
			traerCliente();
		}
	
	});

}

function borrarCliente(idcliente){
	let data={
		id:idcliente
	};
	let dataToSend=JSON.stringify(data);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
        type:"DELETE",
        datatype:"JSON",
		data:dataToSend,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");		
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},

		complete : function(){
			traerCliente();
		}
	
	});

}

//metodos de mensaje

function traerMensaje(){
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
        type:"GET",
        datatype:"JSON",
		
		success : function(mensaje){
			let ms=mensaje.items;
			$("#listaMensajes").empty();

			for(i=0;i<ms.length;i++){
				$("#listaMensajes").append(ms[i].id+"<b> "+ms[i].messagetext+"</b> ");
				$("#listaMensajes").append("<button onclick='borrarMensaje("+ms[i].id+")'>Borrar</button><br>"); 
			}
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		}
	
	});
	
}

function guardarMensaje(){
	let idmensaje=$("#id").val();
	let textomensaje=$("#messagetext").val();
	
	let datamensajes={
		id:idmensaje,
		messagetext:textomensaje,

	};

	let dataToSend3=JSON.stringify(datamensajes);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
        type:"POST",
        datatype:"JSON",
		data:dataToSend3,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#messagetext").val("");	
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},
		complete : function(){
			traerMensaje();
		}
	
	});

}

function editarMensaje(){
	let idmensaje=$("#id").val();
	let textomensaje=$("#messagetext").val();
	
	let datamensajes={
		id:idmensaje,
		messagetext:textomensaje,

	};

	let dataToSend3=JSON.stringify(datamensajes);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
        type:"PUT",
        datatype:"JSON",
		data:dataToSend3,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#messagetext").val("");	
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},

		complete : function(){
			traerMensaje();
		}
	
	});

}

function borrarMensaje(idmensaje){
	let datamensajes={
		id:idmensaje,
	};
	let dataToSend3=JSON.stringify(datamensajes);
	$.ajax({
		url:'https://g994f152cbeb800-bdpruebaciclo3.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
        type:"DELETE",
        datatype:"JSON",
		data:dataToSend3,
		contentType:'application/json',
		
		success : function(){
			$("#id").val("");
			$("#messagetext").val("");	
		
		},
		error : function(xhr, status){
			alert('ha sucedido un error');
		},

		complete : function(){
			traerMensaje();
		}
	
	});

}