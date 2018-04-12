//Inclusión de la librería pillars
const project = require('pillars');

//Configuraciones
project.config.debug = true;
project.config.logfile = true;

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

//Segundo controlador de ruta para recibir parametros
project.routes.add(new Route(
  //Configuración del controlador
  {
    id: "controlerId",
    method: ["GET","POST"],
    path: '/prueba/:var'
  },
  //Manejador del controlador
  function(gw){
    gw.send("Received var: "+ gw.pathParams['var']);
}));

