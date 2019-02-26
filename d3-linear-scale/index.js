const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 600)
    .attr('height', 600)

// create margins and dimensions
const margin = {top: 20, right: 20, bottom: 100, left: 100}
const graphWidth = 600 - margin.left - margin.right
const graphHeight = 600 - margin.top - margin.bottom

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0, ${graphHeight})`)
const yAxisGroup = graph.append('g')

d3.json('menu.json').then(data => {

    const y = d3.scaleLinear()
        // domain = input values
        .domain([0, d3.max(data, d => d.orders)])
        // range = output values
        .range([graphHeight, 0])
        console.log("should print 200:", y(400))
    // we can now call y() to reduce the height of our charts.

    // const min = d3.min(data, d => d.orders)
    // console.log('min orders', min)
    // const max = d3.max(data, d => d.orders)
    // console.log('max orders', max)
    // const extent = d3.extent(data, d => d.orders)
    // console.log('min-max:', extent)

    // this sets the bar widths, padding etc.
    const x = d3.scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)


    // join data to rects
    const rects = graph.selectAll('rect')
        .data(data)

    rects.attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders))

    //append the enter selection to DOM
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders))
        // note that the x coordinates are 70px but width is 50px.
        // this leaves a nice gap between our bar charts before the next bar.
        // you can also use a bandscale instead.



    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)
        // sets the amount of y values shown
        .ticks(7)
        // gives labels on y axis

    xAxisGroup.call(xAxis)
    yAxisGroup.call(yAxis)

    xAxisGroup.selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
        .attr('color', 'blue')
})