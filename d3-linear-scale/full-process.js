const svg = d3.select('svg')

d3.json('menu.json').then(data => {

    const y = d3.scaleLinear()
        // domain = input values
        .domain([0,d3.max(data, d => d.orders)])
        // range = output values
        .range([0, 500])
        console.log("should print 200:", y(400))
    // we can now call y() to reduce the height of our charts.

    const min = d3.min(data, d => d.orders)
    console.log('min orders', min)
    const max = d3.max(data, d => d.orders)
    console.log('max orders', max)
    const extent = d3.extent(data, d => d.orders)
    console.log('min-max:', extent)

    // this sets the bar widths, padding etc.
    const x = d3.scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)


    // join data to rects
    const rects = svg.selectAll('rect')
        .data(data)

    rects.attr('width', x.bandwidth)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))

    //append the enter selection to DOM
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        // note that the x coordinates are 70px but width is 50px.
        // this leaves a nice gap between our bar charts before the next bar.
        // you can also use a bandscale instead.
})