// import { data } from './data'

const data = [
    {
        width: 400,
        height: 200,
        fill: 'red'
    },
    {
        width: 200,
        height: 100,
        fill: 'blue'
    },
    {
        width: 100,
        height: 300,
        fill: 'orange'
    }
]

const svg = d3.select('svg')

const rects = svg.selectAll('rect')
    .data(data)
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill)

// Makes the creation of rectangles dynamic
rects.enter()
    .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill)