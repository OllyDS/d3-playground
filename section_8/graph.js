const dimensions = { height: 300, width: 300, radius: 150 }
const center = { x: (dimensions.width / 2 + 5), y: (dimensions.height / 2 + 5) }

const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', dimensions.width + 150)
    .attr('height', dimensions.height + 150)

const graph = svg.append('g')
    .attr('transform', `translate(${center.x}, ${center.y})`)

const pie = d3.pie()
    .sort(null)
    .value(data => data.cost)

// Now that we have the start/end angles from .pie() we can draw them out:
const arcPath = d3.arc()
    .outerRadius(dimensions.radius)
    .innerRadius(dimensions.radius / 2)


// (1) grab the static data:
const angles = d3.json('data.json').then(data => {

    // (2) assign the graph path elements to paths variable.
    const paths = graph.selectAll('path')
        .data(pie(data))

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('d', arcPath)
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)

})





// GET REPO DATA FROM GITHUB.
// COUNT REPOS FROM EACH LANG.
// CREATE DONUT CHART BASED ON THESE NUMBERS.