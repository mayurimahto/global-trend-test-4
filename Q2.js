//Problem Statement
//Write a function to find the shortest path from a source vertex to all other vertices in a graph using Dijkstra's algorithm.
//Sample Test Case
//Input: graph = {0: {1: 4, 2: 1}, 1: {3: 1}, 2: {1: 2, 3: 5}, 3: {}}, source = 0 Output: {0: 0, 1: 3, 2: 1, 3: 4}

const {MinPriorityQueue } = require('@datastructures-js/priority-queue');

function dijkstra(graph, source){
    const dis = {};
    const pq = new MinPriorityQueue({priority: (x) => x[1]});
    
    for(let v in graph){
        dis[v] = Infinity;
    }
    
    dis[source] = 0;
    pq.enque([source, 0]);
    
    while(!pq.isEmpty()){
        const [currV, currD] = pq.dequeue().element;
        
        for(let n in graph[currV]){
            const d = graph[currV][n];
            const newd = currD + d;
            
            if(newd < dis[n]){
                dis[n] = newd;
                pq.enque([n, newd]);
            }
        }
    }
}

const graph = {
    0: { 1: 4, 2:1},
    1: { 3:1},
    2: { 1: 2, 3: 5},
    3: {}
};

const source = 0;

console.log(dijkstra(graph, source));
