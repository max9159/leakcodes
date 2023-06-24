/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// Solution 2
var allPathsSourceTarget = function(graph) {
    // all path
    const res = [];
        
    const traverse = function(graph, s, path) {
        // add s to temp path
        path.push(s);

        const n = graph.length;
        if (s == n - 1) {
            // to the end
            res.push([...path]);
        }

        // iterate and recusive neighbors
        for (const v of graph[s]) {
            traverse(graph, v, path);
        }
        
        // remove s from temp path
        path.pop();
    }

    // temp path for recusion
    const path = [];
    traverse(graph, 0, path);
    return res;
};

// Solution 1 
// var allPathsSourceTarget = function(graph) {
//     // array to store all paths
//     let allPaths = [];
    
//     // call DFS function with node 0 as starting point
//     dfs(0, [0]);
    
//     // DFS function which takes a node and the current path as parameters
//     function dfs(node, path) {
//         // if current node is the last node, then we have found a path
//         if (node === graph.length - 1) {
//             allPaths.push(path);
//             return;
//         }
        
//         // iterate through all the neighbors of the current node
//         for (let nextNode of graph[node]) {
//             // for each neighbor, call DFS with the neighbor and the updated path
//             dfs(nextNode, [...path, nextNode]);
//         }
//     }
    
//     // return all paths
//     return allPaths;
// };;


