var dataArray = [{ x: 2, y: 15 }, { x:8, y: 20 }, { x: 16, y:29 }, { x: 20, y: 65 }, { x: 32, y: 50 }];

var svg = d3.select("body")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%");


//d is data 
var line = d3.line()
    .x(function(d){return d.x*6;})
    .y(function(d){return d.y*4;})
    .curve(d3.curveCardinal);

svg.append("path")
.attr("fill", "none")
.attr("stroke", "blue")
.attr("d", line(dataArray));