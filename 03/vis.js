/* global d3 */

const margin = { top: 100, right: 100, bottom: 100, left: 100 };

const width = 960;
const height = 500;

// separation between same-color circles
const padding = 1.5;

// separation between different-color circles
const clusterPadding = 6;

const maxRadius = 12;

// total number of nodes
const n = 200;

// number of distinct clusters
const m = 10;

const z = d3.scaleOrdinal(d3.schemeCategory20);
const clusters = new Array(m);

const svg = d3.select('body')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g').attr('transform', `translate(${width / 2},${height / 2})`);

const nodes = d3.range(200).map(() => {
  const i = Math.floor(Math.random() * m);
  const radius = Math.sqrt(((i + 1) / m) * -Math.log(Math.random())) * maxRadius;
  const d = { cluster: i, r: radius };
  if (!clusters[i] || (radius > clusters[i].r)) clusters[i] = d;
  return d;
});

const graph = {};
graph.nodes = nodes;
graph.links = [];
window.graph = graph;

/*
const circles = svg.append('g')
      .datum(nodes)
    .selectAll('.circle')
      .data(d => d)
    .enter().append('circle')
      .attr('r', d => d.r)
      .attr('fill', d => z(d.cluster))
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

const simulation = d3.forceSimulation(nodes)
    .velocityDecay(0.2)
    .force('x', d3.forceX().strength(0.0005))
    .force('y', d3.forceY().strength(0.0005))
    .force('collide', collide)
    .force('cluster', clustering)
    .on('tick', ticked);

function ticked() {
  circles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
}

// These are implementations of the custom forces.
function clustering(alpha) {
  nodes.forEach((d) => {
    const cluster = clusters[d.cluster];
    if (cluster === d) return;
    let x = d.x - cluster.x;
    let y = d.y - cluster.y;
    let l = Math.sqrt((x * x) + (y * y));
    const r = d.r + cluster.r;
    if (l !== r) {
      l = ((l - r) / l) * alpha;
      d.x -= x *= l;
      d.y -= y *= l;
      cluster.x += x;
      cluster.y += y;
    }
  });
}

function collide(alpha) {
  const quadtree = d3.quadtree()
      .x(d => d.x)
      .y(d => d.y)
      .addAll(nodes);

  nodes.forEach((d) => {
    const r = d.r + maxRadius + Math.max(padding, clusterPadding);
    const nx1 = d.x - r;
    const nx2 = d.x + r;
    const ny1 = d.y - r;
    const ny2 = d.y + r;
    quadtree.visit((quad, x1, y1, x2, y2) => {
      if (quad.data && (quad.data !== d)) {
        let x = d.x - quad.data.x;
        let y = d.y - quad.data.y;
        let l = Math.sqrt((x * x) + (y * y));
        const r = d.r + quad.data.r + (d.cluster === quad.data.cluster ? padding : clusterPadding);
        if (l < r) {
          l = ((l - r) / l) * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.data.x += x;
          quad.data.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  });
}
*/