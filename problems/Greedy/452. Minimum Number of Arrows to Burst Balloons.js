/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {

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

      // here different from problem "435. Non-overlapping Intervals"
      // due to the Balloons thourgh boundary could be count
      // if (start >= xEnd) {  <<< 435 use this condition
      if (start > xEnd) {
        // find next start val of range 
        count++;
        xEnd = intvs[i][1];
      }
    }
    return count;
  }
  return intervalSchedule(points);
};