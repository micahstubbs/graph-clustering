this iteration draws nothing and instead exposes a `window.graph` object that we can extract and convert to static data

```
const graph = {};
graph.nodes = nodes;
graph.links = [];
window.graph = graph;
```

an iteration on the block [Clustered Force Layout 4.0](https://bl.ocks.org/shancarter/f621ac5d93498aa1223d8d20e5d3a0f4) from [@shancarter](https://twitter.com/shancarter)

while [es-linting](http://eslint.org/docs/rules/no-mixed-operators) code from this block, I read up on [operator precendence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) in Javascript. It turns out that multiplication `*` is evaluated before division `/`.