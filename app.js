//Inclusión de la librería pillars
const project = require('pillars');

//Tomamos e iniciamos del servicio http
project.services.get('http').start();

//Añadimos un nuevo controlador de ruta
project.routes.add(new Route(
  //Configuración del controlador
  {
    id: "controlerId",
    method: ["GET","POST"],
    path: '/'
  },
  //Manejador del controlador
  function(gw){
    gw.html("Hello world!!");
}));