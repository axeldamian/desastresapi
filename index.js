var http = require("http");
var server = http.createServer();

var express = require('express'); //  npm install express
var request = require ('request'); //npm install -save request
var bodyParser = require('body-parser'); // npm install body-parser --save
var cookieParser = require('cookie-parser');// npm install cookie-parser
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(express.cookieParser());
app.use(cookieParser());

app.get('/', function (req, res) {
  var resHTML="bienvenido a la api de desastres";
  res.send(resHTML);
});



//http://localhost:3000/mapa?x=-32.9138674&y=-68.8500436
app.get('/mapa', function(req, res) {
    var headers ='<script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>';
      headers+='<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxk0t7Bdctk0PxDMUJ9AiEPtJcDTcl8Jc"></script>';
      headers+='<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.googlemap/1.5/jquery.googlemap.min.js"></script>';
    var respuestaJHTML ='<div id="map" style="width: 400px; height: 540px;"></div><script type="text/javascript">$(function() {$("#map").googleMap();$("#map").googleMap({"zoom":15});';
        respuestaJHTML+='$("#map").addMarker({';
        respuestaJHTML+='coords: ['+req.query.x+','+req.query.y+'],';
        respuestaJHTML+='title: "Ubicacion del desastre",';
        respuestaJHTML+='text:  "<b>Lorem ipsum</b>."';
        respuestaJHTML+='});';
        respuestaJHTML+='})';
        respuestaJHTML+='</script>';
  res
  //.status(200).send( "X: "+req.query.x+"Y: "+req.query.y );
  .status(200).send( headers+respuestaJHTML );
});

app.get('/terremotos', function(req, res) {
    //console.log(dmsToDeg(req.query.coor));
    //console.log(req.query.coor);
    res
    .status(200).send( objetosTerremotos );
});

/*
app.get('/terremotos/:id', function(req, res) {
    var i = 0;
    while( objetosTerremotos[i].id == req. ){

    }
    res
    .status(200).send( objetosTerremotos );
});*/

app.get('/climaticos', function(req, res) {
    res
    .status(200).send( objetosClimaticos );
});

app.get('/erupciones', function(req, res) {
    res
    .status(200).send( objetosErupciones );
});

app.get('/tsunamis', function(req, res) {
    res
    .status(200).send( objetosTsunamis );
});

app.get('/otros', function(req, res) {
    res
    .status(200).send( objetosOtros );
});


app.listen(process.env.PORT || 3005);

var info1 = {'id':1,'descripcion':'9,5 Ritcher','fecha':'1960','lugar':'Valdivia - Chile','coordenada':'x=-39.8173788&y=-73.2425333','muertes':2000};
var info2 = {'id':2,'descripcion':'9,2 Ritcher','fecha':'1964','lugar':'Anchorage Alaska, Estados Unidos','coordenada':'x=61.2180556&y=-149.9002778','muertes':1400};
var info3 = {'id':3,'descripcion':'9,1 Ritcher','fecha':'2004','lugar':'Sumatra, Indonesia','coordenada':'x=-6.1563549&y=106.8163684','muertes':1000};
var info4 = {'id':4,'descripcion':'9,0 Ritcher','fecha':'2011','lugar':'Japon','coordenada':'x=36.204824&y=138.252924','muertes':'se desconoce'};
var info5 = {'id':5,'descripcion':'8,8 Ritcher','fecha':'2010','lugar':'Cobqeucura - Chile','coordenada':'x=-36.1386156&y=-72.7945218','muertes':150};
var objetosTerremotos = [info1,info2,info3,info4,info5];


var climat1 = {'id':1,'descripcion':'katrina','fecha':'2005','lugar':'Atlántico','coordenada':'x=29.9811248&y=-90.11073','muertes':2541,'danios':'$89.600 millones'};
var climat2 = {'id':2,'descripcion':'Sandy','fecha':'2012','lugar':'Atlántico','coordenada':'x=41.167362&y=-78.731262','muertes':287,'danios':'$50.000 millones'};
var climat3 = {'id':3,'descripcion':'Andrew','fecha':'1992','lugar':'Atlántico','coordenada':'x=34.5257603&y=-92.4146534','muertes':65,'danios':'$40.700 millones'};
var climat4 = {'id':4,'descripcion':'Ike','fecha':'2008','lugar':'Atlántico','coordenada':'x=24.82662496&y=-90.59326172','muertes':229,'danios':'$32.000 millones'};
var climat5 = {'id':5,'descripcion':'Wilma','fecha':'2005','lugar':'Atlántico','coordenada':'x=21.4691137&y=-78.6568942','muertes':62,'danios':'$29.100 millones'};
var objetosClimaticos = [climat1,climat2,climat3,climat4,climat5];


var erupcion1 = {'id':1,'descripcion':' Erupción del Tambora','fecha':'1815','lugar':'Indonesia','coordenada':'x=-8.2479246&y=117.991101','muertes':'se desconoce','danios':'0'};
var erupcion2 = {'id':2,'descripcion':' Volcán de Krakatoa','fecha':'1883','lugar':'Indonesia','coordenada':'x=-6.1021175&y=105.4229873','muertes':'se desconoce','danios':'La erupción liberó 9 kilómetros cúbicos de magma, destruyendo por completo la isla y alterando puestas de sol alrededor de todo el mundo.'};
var erupcion3 = {'id':3,'descripcion':' Erupción de Santorini','fecha':'1610 a.c','lugar':'Grecia','coordenada':'x=36.3931562&y=25.4615092','muertes':'se desconoce','danios':'destruyó por completo al volcán, de la cual se cree que inspiró al mito de Atlantis.'};
var erupcion4 = {'id':4,'descripcion':' Erupción de Santa María','fecha':'1902','lugar':'Guatemala','coordenada':'x=14.72443&y=-91.521393','muertes':'se desconoce','danios':' La erupción destruyó la cara suroeste de este volcán localizado en Guatemala, dejando un cráter de 1 kilómetro de diámetro, y logró aventar ceniza que fue localizada hasta en San Francisco, California.'};
var erupcion5 = {'id':5,'descripcion':' Erupción del volcán Calbuco','fecha':'2015','lugar':'Chile','coordenada':'x=-41.33&y=-72.618333','muertes':'se desconoce','danios':'Causó graves daños a la agricultura y la ganadería y por su causa se declaró el estado de excepción constitucional de zona de catástrofe, alerta roja, toque de queda, evacuación forzada de unas 9000 personas, cerca de 500 viviendas dañadas, suspensión del tránsito aéreo y daños por unos US$40 000 000.'};
var objetosErupciones = [erupcion1,erupcion2,erupcion3,erupcion4,erupcion5];


var tsunami1 = {'id':1,'descripcion':'Terremoto y tsunami de Japón de 2011','fecha':'2011','lugar':'Japón','coordenada':'x=36.204824&y=138.252924','muertes':'15893 muertos,172 heridos,8,405 desaparecidos4','danios':'el daño causado por las catástrofes será equivalente a entre el 3 % y el 5 % del PIB de Japón,'};
var tsunami2 = {'id':2,'descripcion':'Chile Central y Sur: La energía liberada fue cercana a 100 000 bombas atómicas como la liberada en Hiroshima en 1945.','fecha':'2010','lugar':'Chile','coordenada':'x=-34.23&y=-72.0','muertes':'se desconoce','danios':'Un fuerte tsunami impactó las costas chilenas como producto del terremoto, destruyendo varias localidades ya devastadas por el impacto telúrico. '};
var tsunami3 = {'id':3,'descripcion':'Maremoto provocado por el terremoto del océano Índico de 2004 en Tailandia.','fecha':'2004','lugar':'Tailandia','coordenada':'x=15.870032&y=100.992541','muertes':'aproximadamente 280.000 personas.','danios':'Las zonas más afectadas fueron Indonesia y Tailandia, aunque los efectos destructores alcanzaron zonas situadas a miles de kilómetros: Malasia, Bangladés, India, Sri Lanka, las Maldivas e incluso Somalia, en el este de África.'};
var objetosTsunamis = [tsunami1,tsunami2,tsunami3];


var incendio1 = {'id':1,'descripcion':'Alcalá la Real','fecha':'1915','lugar':'españa','coordenada':'x=37.4645203&y=-3.9241021','muertes':0,'danios':'se desconoce'};
var objetosOtros = [incendio1];




/////////////////////////////
function dmsToDeg (dms) {
    if (!dms) {
        return Number.NaN;
    }
    var neg = dms.match(/(^\s?-)|(\s?[SW]\s?$)/) != null ? -1.0 : 1.0;
    dms = dms.replace(/(^\s?-)|(\s?[NSEW]\s?)$/, '');
    dms = dms.replace(/\s/g, '');
    var parts = dms.match(/(\d{1,3})[.,°d ]?\s*(\d{0,2})[']?(\d{0,2})[.,]?(\d{0,})(?:["]|[']{2})?/);
    if (parts == null) {
        return Number.NaN;
    }
    // parts:
    // 0 : degree
    // 1 : degree
    // 2 : minutes
    // 3 : secondes
    // 4 : fractions of seconde
    var d = (parts[1] ? parts[1] : '0.0') * 1.0;
    var m = (parts[2] ? parts[2] : '0.0') * 1.0;
    var s = (parts[3] ? parts[3] : '0.0') * 1.0;
    var r = (parts[4] ? ('0.' + parts[4]) : '0.0') * 1.0;
    var dec = (d + (m / 60.0) + (s / 3600.0) + (r / 3600.0)) * neg;
    return dec;
}


/*
// escuchador:
app.listen(3000, function () {
  console.log('escuchando el puerto 3000..');
});
*/
