class Pqueue {
  constructor() { this.list = [] }
  offer(ele, primary) { primary ? this.list.splice(primary - 1, 0, ele) : this.list.push(ele); }
  size() { return this.list.length; }
  poll() { return this.list.shift(); }
}
String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {

  function plusOne(s, j) {
    let updateVal = s[j];
    if (updateVal === '9')
      updateVal = '0';
    else
      updateVal = (+updateVal + 1).toString();
    return s.replaceAt(j, updateVal);
  }

  function minusOne(s, j) {
    let updateVal = s[j];
    if (updateVal === '0')
      updateVal = '9';
    else
      updateVal = (+updateVal - 1).toString();
    return s.replaceAt(j, updateVal);
  }

  // BFS: Solution 1
  function BFS1(deadends, target) {
    let deads = {};
    deadends.forEach(s => {
      deads[s] = s;
    });
    let visited = {};

    let step = 0;
    let q = new Pqueue();
    q.offer('0000');
    visited['0000'] = '0000';

    while (q.size() > 0) {
      let sz = q.size();
      // poll all queues
      for (let i = 0; i < sz; i++) {
        let cur = q.poll();

        // check deadends
        if (deads[cur]) continue;
        // meet target
        if (cur === target) return step;

        for (let j = 0; j < 4; j++) {
          let up = plusOne(cur, j);
          if (!visited[up]) {
            q.offer(up);
            visited[up] = up;
          }
          let down = minusOne(cur, j);
          if (!visited[down]) {
            q.offer(down);
            visited[down] = down;
          }
        }
      }
      step++;
    }
    return -1;
  }

  // BFS: Solution 2 
  function BFS(deadends, target) {
    let deads = {};
    deadends.forEach(s => deads[s] = s);
    let visited = {};
    let q1 = {};
    let q2 = {};
    let step = 0;
    q1['0000'] = '0000';
    q2[target] = target;
    while (Object.keys(q1).length > 0 && Object.keys(q2).length > 0) {
      let temp = {};

      // let sz = q.size();
      // poll all queues
      for (const cur of Object.keys(q1)) {
        if (deads[cur]) continue;
        if (q2[cur]) return step;

        visited[cur] = cur;

        for (let j = 0; j < 4; j++) {
          let up = plusOne(cur, j);
          if (!visited[up]) temp[up] = up;

          let down = minusOne(cur, j);
          if (!visited[down]) temp[down] = down;
        }
      }
      step++;
      q1 = Object.assign({}, q2);
      q2 = Object.assign({}, temp);
    }
    return -1;
  }

  return BFS(deadends, target);
};

module.exports = openLock;