export async function registrarUsuario(event) {
	event.preventDefault();
	let datos = {};
	datos.nombre = document.getElementById("nombreUsuario").value;
	datos.apellido = document.getElementById("apellidoUsuario").value;
	datos.dni = document.getElementById("dniUsuario").value;
	datos.emailUsuario = document.getElementById("emailUsuario").value;
	console.log(datos)
	if(document.getElementById("pwdUsuario") === document.getElementById("repetirPWD'")){
		const request = await fetch('/usuario/crear' , {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	} else {
		return false;
	}
}