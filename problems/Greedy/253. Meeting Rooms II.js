// ============================ Solution 3 =====================================

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if(!intervals.length) {
      return 0;
  }

  // sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // use a min-heap/priority queue to track the end time of meetings
  let pq = [intervals[0][1]];

  for(let i = 1; i < intervals.length; i++) {
      if(intervals[i][0] >= pq[0]) {
          // the meeting can take place in the current room, remove the room from the heap
          pq.shift();
      }

      // add the current meeting's end time into the heap
      pq.push(intervals[i][1]);
      pq.sort((a, b) => a - b); // make sure the earliest ending time is at the front
  }

  // the size of the heap gives us the minimum rooms required
  return pq.length;    
};
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