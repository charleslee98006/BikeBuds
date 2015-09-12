// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var port = 4000;

// var publicConfig = {
//   key: 'AIzaSyD42cn8u5aAfqjgkMwWYYdTWtCRRaw8ZwY',
//   stagger_time:       1000, // for elevationPath
//   encode_polylines:   false,
//   secure:             true, // use https
//   proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
// };

// var gmAPI = new GoogleMapsAPI(publicConfig);


// var params = {
//   center: '444 W Main St Lock Haven PA',
//   zoom: 15,
//   size: '500x400',
//   maptype: 'roadmap',
//   markers: [
//     {
//       location: '300 W Main St Lock Haven, PA',
//       label   : 'A',
//       color   : 'green',
//       shadow  : true
//     },
//     {
//       location: '444 W Main St Lock Haven, PA',
//       icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600'
//     }
//   ],
//   style: [
//     {
//       feature: 'road',
//       element: 'all',
//       rules: {
//         hue: '0x00ff00'
//       }
//     }
//   ],
//   path: [
//     {
//       color: '0x0000ff',
//       weight: '5',
//       points: [
//         '41.139817,-77.454439',
//         '41.138621,-77.451596'
//       ]
//     }
//   ]
// };
// gmAPI.staticMap(params); // return static map URL
// gmAPI.staticMap(params, function(err, binaryImage) {
//   // fetch asynchronously the binary image
// });


// // Displays server log in the CLI
// app.use(express.logger());

// var google = require('node-google-api')({
//     apiKey: 'AIzaSyBdwq1SQMg3lT1ESWLFt5CRik12NKM6v3I',
//     debugMode: true // Throws errors instead of passing them silently.
// });


// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
// use either jade or ejs
app.set('view engine', 'jade');

// instruct express to server up static assets
app.use(express.static('public'));

// google.build(function(api) {
//   api.calendar.events.list({
//     calendarid: 'en.usa#holiday@group.v.calendar.google.com'
//   }, function(result) {
//     if(result.error){
//       console.log(result.error);
//     } else {
//       for(var i in result.items) {
//         console.log(result.items[i].summary);
//       }
//     }
//   });
// });

// set routes
app.get('/', function(req, res) {
  res.render('index');
});

// Set server port
app.listen(process.env.PORT||port);
console.log("Server is running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
