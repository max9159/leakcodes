// This solution has a time complexity of O(m log m + m α(n)), where m is the number of logs, 
// n is the number of people, and α(n) is the inverse Ackermann function, which is very slow-growing and can be considered a constant for all practical purposes. 
// The log m term comes from sorting the logs, and the m α(n) term comes from the union-find operations.
var earliestAcq = function (logs, n) {
  // Sort the logs array by timestamp in ascending order
  logs.sort((a, b) => a[0] - b[0]);

  // Initialize the parent array where each person is the parent of themselves (in their own group)
  let parent = Array.from({ length: n }, (_, i) => i);

  // Initialize the rank array where each person is at rank 0
  let rank = Array.from({ length: n }, () => 0);

  // Initially, we have 'n' groups, where each person forms their own group
  let groups = n;

  // Function 'find' to find the parent (or the root of the set/tree) of a person 'i'
  let find = p => {
    if (parent[p] !== p) {
      // If 'p' is not the parent of itself, then we recursively find the parent
      // Also implement path compression: set the parent of 'p' to be its root
      parent[p] = find(parent[p]);
    }
    // Return the parent of 'i'
    return parent[p];
  };

  // Function 'union' to join the groups of person 'i' and 'j'
  let union = (i, j) => {
    // Find the parents (or the roots of the sets/trees) of 'i' and 'j'
    let pi = find(i), pj = find(j);
    if (pi !== pj) { // If 'i' and 'j' are not in the same group
      // Join the groups by making one the parent of the other
      // We make the group with smaller rank become the child to keep the tree more balanced
      if (rank[pi] > rank[pj]) {
        parent[pj] = pi;
      } else if (rank[pi] < rank[pj]) {
        parent[pi] = pj;
      } else {
        // If both have the same rank, make one the parent and increment its rank
        parent[pj] = pi;
        rank[pi]++;
      }
      // Since we merged two groups into one, we decrement the count of total groups
      groups--;
    }
  };

  // Iterate through each log
  for (let log of logs) {
    // For each log, merge the groups of the two people who become friends
    union(log[1], log[2]);
    // If there's only one group left, it means everyone is friends with everyone, so return the timestamp of this log
    if (groups === 1) return log[0];
  }

  // If we've checked all logs and there are still multiple groups, return -1 to indicate that it's impossible to make everyone friends
  return -1;
};
