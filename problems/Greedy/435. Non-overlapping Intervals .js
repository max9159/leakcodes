/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

  // Get non-overlapping count
  function intervalSchedule(intvs) {
    // sort by end
    if (intvs.length === 0) return 0;
    intvs.sort((a, b) => a[1] - b[1]);
    // at least one range non-overlapping
    let count = 1;

    let xEnd = intvs[0][1];
    for (let i = 0; i < intvs.length; i++) {
      let start = intvs[i][0];
      if (start >= xEnd) {
        // find next start val of range 
        count++;
        xEnd = intvs[i][1];
      }
    }
    return count;
  }
  const n = intervals.length;
  return n - intervalSchedule(intervals);
};