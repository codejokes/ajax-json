const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'transaccion.json', true);

    xhr.onload = function() {
        if(this.status === 200){
            const persona = JSON.parse(this.responseText);

            //construir un template
            const htmlTemplate = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Codigo del empleado: ${persona.codigo}</li>
                <li>Tipo de cuenta: ${persona.tipo_cuenta}</li>
                <li>Numero de cuenta: ${persona.numero_cuenta}</li>
                <li>Tipo de transaccion: ${persona.tipotransaccion}</li>
                <li>Monto de Transacccion: ${persona.monto}</li>
            </ul>
            `;
            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});
//elemento a seleccionar en el html 
const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', function(){
    //tipo de peticion
    const xhr = new XMLHttpRequest();
    
    
    //abrir la conexion declarando tipo de peticion nombre del archivo que voy a abrir valor true
    xhr.open('GET', 'transacciones.json', true);

    //cargar los datos en la peticion de recarga(onload)
    xhr.onload = function(){
        if(this.status === 200){
            //creo la constante sobre la cual adjunto el texto del archivo json parseado es decir legible para el documento en el html
            const transacciones = JSON.parse(this.responseText);

            // creo un template para poder representar la data dentro del json
            let htmlTemplate = '';
            transacciones.forEach(function (persona) {
                htmlTemplate += `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Codigo del empleado: ${persona.codigo}</li>
                    <li>Tipo de cuenta: ${persona.tipo_cuenta}</li>
                    <li>Numero de cuenta: ${persona.numero_cuenta}</li>
                    <li>Tipo de transaccion: ${persona.tipotransaccion}</li>
                    <li>Monto de Transacccion: ${persona.monto}</li>
                </ul> 
                `;
            });
            document.getElementById('empleados').innerHTML = htmlTemplate;


             
            
        }
    }
    xhr.send();
});