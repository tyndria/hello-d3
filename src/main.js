const element = d3.select('.chart').append('svg');

const scale = d3.scaleLinear();
scale.domain([0, 1]);
scale.range([0, 800]);

const axis = d3.axisBottom();
axis.scale(scale);

element.call(axis);