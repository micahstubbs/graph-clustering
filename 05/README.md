a force layout where like-nodes cluster together, drawn from static data

now with links! the graph shown is `firm.csv` from [@elijah_meeks](https://twitter.com/elijah_meeks)'s block [Networks - Graphs 5](https://bl.ocks.org/emeeks/39fea1d900964379416b), converted to `json` 

this iteration also adds data-driven clusters 🎉 

clusters are detected with [jLouvain](https://github.com/upphiminn/jLouvain), a Javascript implementation of the [Louvain](https://en.wikipedia.org/wiki/Community_structure#The_Louvain_method) community detection algorithm

an iteration on the block [clustered force layout, static data](https://bl.ocks.org/micahstubbs/bb8a7dd10eb6b2a05db14a52ff228bdf) from [@micahstubbs](https://twitter.com/micahstubbs) which is in turn a iteration on [Clustered Force Layout 4.0](https://bl.ocks.org/shancarter/f621ac5d93498aa1223d8d20e5d3a0f4) from [@shancarter](https://twitter.com/shancarter)

check out the [companion repo](https://github.com/micahstubbs/graph-clustering) for a [nice commit history](https://github.com/micahstubbs/graph-clustering/commits/master) and related experiments