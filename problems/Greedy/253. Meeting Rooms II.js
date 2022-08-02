// ============================ Solution 2 =====================================
/**
 * @param {number[][]} meetings
 * @return {number}
 */
var minMeetingRooms = function (meetings) {
  let n = meetings.length;
  let begin = new Array(n);
  let end = new Array(n);
  // get all start/end 
  for (let i = 0; i < n; i++) {
    begin[i] = meetings[i][0];
    end[i] = meetings[i][1];
  }

  // Just check the start/end in timeline, so the combination is not important.
  begin.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let count = 0;
  // two pointer
  let res = 0, i = 0, j = 0;
  while (i < n && j < n) {
    if (begin[i] < end[j]) {
      // found the start
      count++;
      i++;
    } else {
      // found the end
      count--;
      j++;
    }
    // check maximum
    res = Math.max(res, count);

  }
  return res;
}


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