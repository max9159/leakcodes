var MyCalendar = function () {
  this.books = [];
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function (start, end) {
  // O(n) : Loop
  // for (let b of this.books) {
  //     if (Math.max(b[0], start) < Math.min(b[1], end)) {
  //         return false; // overlap
  //     }
  // }
  // this.books.push([start, end]);
  // return true;

  // O(log n) : Binary Search
  let left = 0, right = this.books.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (this.books[mid][0] < start) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Check for overlap with the previous interval
  if (right >= 0 && this.books[right][1] > start) {
    return false;
  }

  // Check for overlap with the next interval
  if (left < this.books.length && this.books[left][0] < end) {
    return false;
  }

  // No overlap found, insert the booking
  this.books.splice(left, 0, [start, end]);
  return true;
};
