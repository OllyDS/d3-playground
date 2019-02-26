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

const rect = svg.selectAll('rect')
    .data(data)
    .attr('width', (d, i, n) => {
        console.log("index:", i)
        console.log("current selection:", n)
        console.log("data:", d)
        console.log("ES6 version of 'this':", n[i])
        return d.width
    })
    .attr('height', d => d.height)
    .attr('fill', d => d.fill)