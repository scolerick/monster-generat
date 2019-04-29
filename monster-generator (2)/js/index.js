/**
  CONFIGURE JSON CALL
**/

// Background Randomizer
var max = 3;
var randNum = Math.floor(Math.random() * max);

// Storge BGs
$('body').addClass('bg' + randNum);

// The API feed

const getStuff = 'https://api-beta.open5e.com/monsters/?format=json;';

// Do stuff with returned data
let doStuff = function (data) {

  // How big is array?     
  console.log(data.results);
  console.log(data.results.length);

  for (i = 0; i < data.results.length; i++) {
    const template =
    `
<center>
<div class=justPadding>
<div class=container>
<h1> ${data.results[i].name}</h1>
Size: ${data.results[i].size}<br>
Type: ${data.results[i].type}<br>
Alignment: ${data.results[i].alignment}<br>
Hit Points:
${data.results[i].hit_points}<br><br>
</></div></div>
`;

    $('#app').append(template);

  }

};

/**
     GET JSON FROM API
   **/

$.getJSON(getStuff, doStuff);

/**
                                SHOW (DISPLAY ON PAGE)
                              
                              let showStuff = function(data) {
                                
                                console.log( data );  
                               
                              }
                              
                              **/