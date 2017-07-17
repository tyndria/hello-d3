const margin = {
	left: 40,
	bottom: 30,
	top: 30,
	right: 30
};
const height = 600 - margin.top - margin.bottom;
const width = 900 - margin.left - margin.right;

const svg = d3
	.select('.chart')
	.append('svg')
	.style('width', width + margin.left + margin.right)
	.style('height', height + margin.top + margin.bottom)
	.append('g')
	.attr('transform', `translate(${margin.left}, ${margin.top})`);

const x = d3
	.scaleBand()
	.padding(0.1)
	.range([0, width]);

const y = d3
	.scaleLinear()
	.range([height, 0]);

d3.csv('data.csv', (error, data) => {
	x.domain(data.map(d => d.key));
	y.domain([0, d3.max(data, (d => d.value))]);

	svg.selectAll('.bar')
		.data(data)
		.enter().append('rect')
		.attr('class', 'bar')
		.attr('x', (d => x(d.key)))
		.attr('width', x.bandwidth())
		.attr('y', (d => y(d.value)))
		.attr('height', (d => height - y(d.value)));

	svg.append('g')
		.attr('transform', `translate(0, ${height})`)
		.call(d3.axisBottom().scale(x));

	svg.append('g')
		.call(d3.axisLeft().scale(y));
});
