/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let sortedEnve = envelopes.sort(function (a, b) {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  // Fill height
  let dpHeight = Array(envelopes.length).fill(0);
  for (let i = 0; i < sortedEnve.length; i++)
    dpHeight[i] = sortedEnve[i][1];

  // Find Hight with LIS, to use binary search algorithm avoid Time Limit Exceeded
  function lengthOfLIS(nums) {
    let top = Array(nums.length).fill(0);
    let piles = 0;
    for (let i = 0; i < nums.length; i++) {
      let poker = nums[i];
      let left = 0, right = piles;
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (top[mid] >= poker)
          right = mid;
        else
          left = mid + 1;
      }
      if (left === piles) piles++;
      top[left] = poker;
    }
    return piles;
  }

  return lengthOfLIS(dpHeight);
}


// ======================= Incomplete Soultion ==========================================
// var maxEnvelopes = function (envelopes) {
//   let dp = Array(envelopes.length).fill([[-1, -1]]);
//   let dpUpDown = Array(envelopes.length).fill([0, 0]);

//   for (let i = 0; i < envelopes.length; i++) {
//     const envi0 = envelopes[i][0];
//     const envi1 = envelopes[i][1];
//     dp[i] = [[...[envi0, envi1]]];
//     for (let j = 0; j < envelopes.length; j++) {
//       if (i === j) continue;
//       const envj0 = envelopes[j][0];
//       const envj1 = envelopes[j][1];

//       if (envi0 > envj0 && envi1 > envj1) {
//         for (let k = 0; k <= dp[i].length; k++) {
//           if (dp[i][k][0] === envj0 || dp[i][k][1] === envj1) break;

//           if (dp[i][k][0] > envj0 && dp[i][k][1] > envj1) {
//             if (k == 0)
//               dp[i] = [[envj0, envj1], ...dp[i]]; // unshift
//             else {
//               if (dp[i][k - 1][0] > envj0 || dp[i][k - 1][1] > envj1) break;

//               dp[i] = [...dp[i].slice(0, k), [envj0, envj1], ...dp[i].slice(k, dp[i].length)];
//             }
//             dpUpDown[i] = [...[dpUpDown[i][0] + 1, dpUpDown[i][1]]];
//             break;
//           }
//         }

//       } else if (envi0 < envj0 && envi1 < envj1) {
//         for (let k = dp[i].length - 1; k >= 0; k--) {
//           if (dp[i][k][0] === envj0 || dp[i][k][1] === envj1) break;

//           if (dp[i][k][0] < envj0 && dp[i][k][1] < envj1) {
//             if (k == dp[i].length - 1)
//               dp[i] = [...dp[i], [envj0, envj1]]; // push
//             else {
//               if (dp[i][k + 1][0] < envj0 || dp[i][k + 1][1] < envj1) break;

//               dp[i] = [...dp[i].slice(0, k + 1), [envj0, envj1], ...dp[i].slice(k + 1, dp[i].length)];
//             }
//             dpUpDown[i] = [...[dpUpDown[i][0], dpUpDown[i][1] + 1]];
//             break;
//           }
//         }

//       }

//     }
//   }

//   let res = 0;
//   for (let i = 0; i < dp.length; i++) {
//     const envi0 = envelopes[i][0];
//     const envi1 = envelopes[i][1];
//     for (let j = 0; j < envelopes.length; j++) {
//       if (i === j) continue;
//       const envj0 = envelopes[j][0];
//       const envj1 = envelopes[j][1];
//       if (envi0 > envj0 && envi1 > envj1) {
//         const maxDown = Math.max(dpUpDown[j][0] + 1, dpUpDown[i][0]);
//         res = Math.max(res, dpUpDown[i][1] + maxDown);
//       } else if (envi0 < envj0 && envi1 < envj1) {
//         const maxUp = Math.max(dpUpDown[j][1] + 1, dpUpDown[i][1]);
//         res = Math.max(res, dpUpDown[i][0] + maxUp);
//       }

//     }
//   }

//   return res + 1;
// };
module.exports = maxEnvelopes;