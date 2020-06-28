var dataArray = [5, 11, 18, 3];

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

svg.selectAll('rect')
    .data(dataArray)
    .enter().append('rect')
    //stylin
    .attr("fill", "pink")
    //Mandatory attributes are h, w, x, y
    .attr("height", function (d, i) { return d * 15; })
    .attr("width", "50")
    //to make dynamic we need to use a function d = data point i = index
    .attr("x", function (d, i) { return 60 * i; })
    //to invert we need to create a function and subtract the height
    .attr("y", function (d, i) { return 300 - (d * 15); });

// Circle Time! We position these by the center of the circle
var newX = 300;
svg.selectAll('circle.firstSet')
    .data(dataArray)
    .enter().append('circle')
    .attr("class", "firstSet")
    .attr("fill", "green")
    .attr("cx", function(d,i){newX +=(d*3)+(i*20); return newX;})
    .attr("cy", "100")
    .attr("r", function(d,i){return d*3; });



// Ellipse
var newX = 600;
svg.selectAll('ellipse.secondSet')
    .data(dataArray)
    .enter().append('ellipse')
    .attr("class", "secondSet")
    .attr("fill", "purple")
    .attr("cx", function(d,i){newX +=(d*3)+(i*20); return newX;})
    .attr("cy", "100")
    .attr("rx", function(d,i){return d*3; })
    .attr("ry", "30");

// Lines
var newX = 900;
svg.selectAll('line')
    .data(dataArray)
    .enter().append('line')
    .attr("x1", function(d,i){newX +=(d*3)+(i*20); return newX;})
    .attr("y1", "100")
    .attr("x2", function(d,i){return d*3; })
    .attr("y2", "30");


