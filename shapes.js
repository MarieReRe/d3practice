var dataArray = [5,11,18];

var svg = d3.select("body").append("svg")
    .attr("height","100%")
    .attr("width","100%");

    svg.selectAll('rect')
    .data(dataArray)
    .enter().append('rect')
    .attr("height",function(d,i){return d*15;})
    .attr("width","50")
    //to make dynamic we need to use a function d = data point i = index
    .attr("x",function(d,i){return 60*i;})
    //to invert we need to create a function and subtract the height
    .attr("y",function(d,i){return 300-(d*15);});

