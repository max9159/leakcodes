/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {

  let count = 0;
  let memo = {};
  function checkNonOverLapping(intvs) {
    if (Object.keys(memo).length === intvs.length) return;
    if (Object.keys(memo).length + 1 === intvs.length) {
      count++;
      return
    };

    let endIndex = -1;
    let end;
    for (let i = 0; i < intvs.length; i++) {
      // interval has been scheduled
      if (memo[i]) continue;
      // for init
      if (!end) {
        end = intvs[i][1];
        endIndex = i;
        memo[endIndex] = true;
      };

      let start = intvs[i][0];
      if (start >= end) {
        memo[endIndex] = true;
        memo[i] = true;
        end = intvs[i][1];
        endIndex = i;
      }
    }
    count++;
    return checkNonOverLapping(intvs);
  }
  // sorting start confirm times are schedule fit.
  checkNonOverLapping(intervals.sort((a, b) => a[0] - b[0]));
  return count;
};