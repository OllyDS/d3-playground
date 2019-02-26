// this is the d3 way of using querySelector, except it wraps it in a d3 wrapper.
const canvas = d3.select(".canvas")
// we can append svgs to our d3 canvas and assign it attributes like so:
const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600)

// append shapes to svg container
svg.append('rect')
    .attr('height', 100)
    .attr('width', 200)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20)

svg.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink')

svg.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red')

svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('Hello')
    .style('font-family', 'Roboto')



const group = svg.append('g')
    .attr('transform', 'translate(0,100)')

group.append('rect')
    .attr('height', 100)
    .attr('width', 200)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20)

group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink')