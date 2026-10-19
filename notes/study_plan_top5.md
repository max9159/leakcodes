# 5 題重點 Coding 讀書計畫（Easy ~ Medium）<!-- omit in toc -->

本讀書計畫自 **Blind 75 / Grind 75 / Top Interview 150** 中精選 **5 道最熱門、難度介於 Easy ~ Medium、且演算法類型完全不重複** 的核心代表題。透過這 5 題可一次掌握面試最常考的五大演算法基石。

---

## 目錄<!-- omit in toc -->
- [一、題目總覽與讀書時程規劃](#一題目總覽與讀書時程規劃)
- [二、逐題深度拆解與學習重點](#二逐題深度拆解與學習重點)
  - [Day 1｜Hash Map（雜湊表）：`1. Two Sum` (Easy)](#day-1hash-map雜湊表1-two-sum-easy)
  - [Day 2｜Sliding Window（滑動視窗）：`3. Longest Substring Without Repeating Characters` (Medium)](#day-2sliding-window滑動視窗3-longest-substring-without-repeating-characters-medium)
  - [Day 3｜Binary Search（二分搜尋）：`33. Search in Rotated Sorted Array` (Medium)](#day-3binary-search二分搜尋33-search-in-rotated-sorted-array-medium)
  - [Day 4｜Graph / Grid DFS（圖與矩陣遍歷）：`200. Number of Islands` (Medium)](#day-4graph--grid-dfs圖與矩陣遍歷200-number-of-islands-medium)
  - [Day 5｜Dynamic Programming（動態規劃）：`322. Coin Change` (Medium)](#day-5dynamic-programming動態規劃322-coin-change-medium)
- [三、每日練習 SOP 與驗收清單](#三每日練習-sop-與驗收清單)

---

## 一、題目總覽與讀書時程規劃

| 天數 | 題目名稱 | 難度 | 演算法 / 資料結構類型 | 時間複雜度 | 空間複雜度 | 專案檔案連結 | 狀態 |
| :---: | :--- | :---: | :--- | :---: | :---: | :--- | :---: |
| **Day 1** | [1. Two Sum](https://leetcode.com/problems/two-sum/) | Easy | **Hash Map & Array**（空間換時間查找） | $O(n)$ | $O(n)$ | [1. Two Sum.js](../problems/DataStructures/1.%20Two%20Sum.js) | 新建 |
| **Day 2** | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | **Sliding Window & Two Pointers**（動態區間維護） | $O(n)$ | $O(\min(m, n))$ | [3. Longest Substring Without Repeating Characters.js](../problems/SlidingWindow/3.%20Longest%20Substring%20Without%20Repeating%20Characters.js) | 既有 |
| **Day 3** | [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | **Binary Search**（折半搜尋與局部有序判斷） | $O(\log n)$ | $O(1)$ | [33. Search in Rotated Sorted Array.js](../problems/Binary%20Search/33.%20Search%20in%20Rotated%20Sorted%20Array.js) | 新建 |
| **Day 4** | [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | **DFS / Flood Fill**（二維矩陣與連通分量搜尋） | $O(m \times n)$ | $O(m \times n)$ | [200. Number of Islands.js](../problems/DFS/200.%20Number%20of%20Islands.js) | 既有 |
| **Day 5** | [322. Coin Change](https://leetcode.com/problems/coin-change/) | Medium | **Dynamic Programming**（狀態轉移與完全背包） | $O(\text{amount} \times k)$ | $O(\text{amount})$ | [322. Coin Change.js](../problems/DynamicProgramming/322.%20Coin%20Change.js) | 既有 |

---

## 二、逐題深度拆解與學習重點

### Day 1｜Hash Map（雜湊表）：`1. Two Sum` (Easy)

- **檔案位置**：[`problems/DataStructures/1. Two Sum.js`](../problems/DataStructures/1.%20Two%20Sum.js)
- **題目需求（Problem Statement）**：
  - **問題描述**：給定一個整數陣列 `nums` 和一個目標整數 `target`，請在陣列中找出**相加總和等於 `target` 的那兩個數字**，並回傳它們各自的**陣列索引（index）**。
  - **限制條件**：
    - 每組輸入保證**剛好只有唯一一組解**。
    - **同一個元素不能重複使用兩次**（即回傳的兩個索引 `i !== j`）。
    - 可以按任意順序回傳答案索引。
  - **範例（Examples）**：
    ```text
    Example 1:
    Input: nums = [2, 7, 11, 15], target = 9
    Output: [0, 1]
    Explanation: 因為 nums[0] + nums[1] == 2 + 7 == 9，所以回傳 [0, 1]。

    Example 2:
    Input: nums = [3, 2, 4], target = 6
    Output: [1, 2]
    Explanation: 因為 nums[1] + nums[2] == 2 + 4 == 6（注意不能重複用兩次 nums[0]=3）。
    ```
- **為什麼必讀**：
  - LeetCode 全站出場率第 1 名，所有 Coding Interview 的破冰首選題。
  - 建立演算法優化最重要的第一課：**「當內層迴圈在陣列中做 $O(n)$ 線性查找時，優先思考能否用 Hash Map 轉為 $O(1)$ 查找」**。
- **解題思維演進**：
  1. **暴力解（Brute Force）**：雙層迴圈枚舉所有 `(i, j)` 配對，時間複雜度 $O(n^2)$、空間 $O(1)$。
  2. **雜湊表優化（One-pass Hash Map）**：遍歷陣列時計算差值 `complement = target - nums[i]`，若 `complement` 已存在於 `Map` 中即直接回傳索引，否則將 `(nums[i], i)` 存入 `Map`，時間複雜度降為 $O(n)$。
- **核心程式碼架構**：
  ```javascript
  var twoSum = function (nums, target) {
    const numIndexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numIndexMap.has(complement)) {
        return [numIndexMap.get(complement), i];
      }
      numIndexMap.set(nums[i], i);
    }
    return [];
  };
  ```
- **同類延伸題（專案內可對照練習）**：
  - [`217. Contains Duplicate.js`](../problems/DataStructures/217.%20Contains%20Duplicate.js) (Easy)
  - [`167. Two Sum II - Input Array Is Sorted.js`](../problems/TwoPointers/167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted.js) (Medium)
  - [`15. 3Sum.js`](../problems/TwoPointers/15.%203Sum.js) (Medium)

---

### Day 2｜Sliding Window（滑動視窗）：`3. Longest Substring Without Repeating Characters` (Medium)

- **檔案位置**：[`problems/SlidingWindow/3. Longest Substring Without Repeating Characters.js`](../problems/SlidingWindow/3.%20Longest%20Substring%20Without%20Repeating%20Characters.js)
- **對應筆記**：[`notes/algorithm.md` — Two Pointer - Sliding Window](./algorithm.md#two-pointer---sliding-window-on)
- **題目需求（Problem Statement）**：
  - **問題描述**：給定一個字串 `s`，請找出其中**不含有任何重複字元的「最長連續子字串（Substring）」**，並回傳該子字串的**長度**。
  - **限制條件**：
    - 注意是**連續子字串（Substring）**，而非可跳字的子序列（Subsequence）。
    - 字串 `s` 可能包含英文字母、數字、符號與空白，長度可為 `0`。
  - **範例（Examples）**：
    ```text
    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: 無重複字元的最長子字串是 "abc"，長度為 3。

    Example 2:
    Input: s = "pwwkew"
    Output: 3
    Explanation: 無重複字元的最長子字串是 "wke"，長度為 3。（注意 "pwke" 是子序列而非連續子字串）
    ```
- **為什麼必讀**：
  - 字串與連續子陣列（Subarray / Substring）問題的黃金標準題。
  - 學會「右指針主動擴張尋找可行解，左指針被動收縮排除非法狀態」的雙指針同向移動框架。
- **解題思維演進**：
  1. 維護區間 `[left, right)` 與字元計數表 `validMap`。
  2. 每次將 `s[right]` 加入視窗並將 `right++`。
  3. 若 `validMap[s[right]] > 1`（代表視窗內出現重複字元），則持續移動 `left++` 並扣除字元計數，直到視窗重新合法。
  4. 每次視窗合法時更新最大長度 `result = Math.max(result, right - left)`。
- **核心程式碼架構**：
  ```javascript
  var lengthOfLongestSubstring = function (s) {
    let left = 0, right = 0, result = 0;
    let validMap = {};

    while (right < s.length) {
      let c = s[right];
      right++;
      validMap[c] = (validMap[c] || 0) + 1;

      while (validMap[c] > 1) {
        let d = s[left];
        left++;
        validMap[d] = (validMap[d] || 0) - 1;
      }
      result = Math.max(result, right - left);
    }
    return result;
  };
  ```
- **同類延伸題（專案內可對照練習）**：
  - [`209. Minimum Size Subarray Sum.js`](../problems/SlidingWindow/209.%20Minimum%20Size%20Subarray%20Sum.js) (Medium)

---

### Day 3｜Binary Search（二分搜尋）：`33. Search in Rotated Sorted Array` (Medium)

- **檔案位置**：[`problems/Binary Search/33. Search in Rotated Sorted Array.js`](../problems/Binary%20Search/33.%20Search%20in%20Rotated%20Sorted%20Array.js)
- **對應筆記**：[`notes/algorithm.md` — Binary Search: O(log n)](./algorithm.md#binary-search-olog-n)
- **題目需求（Problem Statement）**：
  - **問題描述**：給定一個原本按升序排列、且元素互不相同的整數陣列 `nums`。該陣列在傳入函式前，可能已在某個未知的樞紐點（pivot）進行了旋轉（例如 `[0,1,2,4,5,6,7]` 在索引 3 旋轉後變成 `[4,5,6,7,0,1,2]`）。請在旋轉後的陣列中搜尋目標值 `target`，若存在則回傳其**索引**，否則回傳 `-1`。
  - **限制條件**：
    - 陣列中的所有數字**互不重複（All values are unique）**。
    - **必須設計時間複雜度為 $O(\log n)$ 的演算法**（直接用 `indexOf` 或線性掃描 $O(n)$ 不符合面試要求）。
  - **範例（Examples）**：
    ```text
    Example 1:
    Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
    Output: 4
    Explanation: 目標值 0 位於索引 4。

    Example 2:
    Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
    Output: -1
    Explanation: 陣列中不存在 3，回傳 -1。
    ```
- **為什麼必讀**：
  - 基礎二分搜尋（[`704. Binary Search.js`](../problems/Binary%20Search/704.%20Binary%20Search.js)）在面試中通常只是暖身，面試官最愛考的是「部分有序 / 旋轉陣列」的變形題。
  - 訓練邊界條件控制（`left <= right`、`<=` 與 `<` 的判斷）以及如何每次排除一半搜尋空間。
- **解題思維演進**：
  1. **關鍵觀察**：將旋轉後的排序陣列從 `mid` 一分為二，**左右兩半必定至少有一半是嚴格遞增（有序）的**。
  2. 先比較 `nums[left] <= nums[mid]`：
     - 若成立，代表左半邊 `[left...mid]` 有序：檢查 `target` 是否落在 `[nums[left], nums[mid])`，若是則縮右界 `right = mid - 1`，否則縮左界 `left = mid + 1`。
     - 若不成立，代表右半邊 `[mid...right]` 有序：檢查 `target` 是否落在 `(nums[mid], nums[right]]`，若是則縮左界 `left = mid + 1`，否則縮右界 `right = mid - 1`。
- **核心程式碼架構**：
  ```javascript
  var searchRotated = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) return mid;

      if (nums[left] <= nums[mid]) {
        // 左半邊 [left...mid] 有序
        if (nums[left] <= target && target < nums[mid]) right = mid - 1;
        else left = mid + 1;
      } else {
        // 右半邊 [mid...right] 有序
        if (nums[mid] < target && target <= nums[right]) left = mid + 1;
        else right = mid - 1;
      }
    }
    return -1;
  };
  ```
- **同類延伸題（專案內可對照練習）**：
  - 先熱身：[`704. Binary Search.js`](../problems/Binary%20Search/704.%20Binary%20Search.js) (Easy)
  - 進階邊界：[`34. Find First and Last Position of Element in Sorted Array.js`](../problems/Binary%20Search/34.%20Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array.js) (Medium)

---

### Day 4｜Graph / Grid DFS（圖與矩陣遍歷）：`200. Number of Islands` (Medium)

- **檔案位置**：[`problems/DFS/200. Number of Islands.js`](../problems/DFS/200.%20Number%20of%20Islands.js)
- **對應筆記**：[`notes/algorithm.md` — DFS (Depth-First Search)](./algorithm.md#dfs-depth-first-search)
- **題目需求（Problem Statement）**：
  - **問題描述**：給定一個由 `'1'`（代表陸地）和 `'0'`（代表水域）組成的 $m \times n$ 二維網格 `grid`，請計算並回傳網格中**「島嶼」的總數量**。
  - **限制條件**：
    - **島嶼定義**：由水平或垂直方向（上下左右）相鄰的 `'1'` 連接而成，且四周被水（`'0'`）包圍（斜角相鄰不算連接）。
    - 可假設網格的四條邊界之外全部都是水（`'0'`）。
  - **範例（Examples）**：
    ```text
    Example 1:
    Input: grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ]
    Output: 1
    Explanation: 所有 '1' 都上下左右相連，形成 1 座大島嶼。

    Example 2:
    Input: grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
    Output: 3
    Explanation: 左上角 1 座、中間 [2][2] 1 座、右下角 1 座，共 3 座互不相連的島嶼。
    ```
- **為什麼必讀**：
  - 矩陣／圖論（Graph）面試最熱門第 1 名題目，涵蓋遞迴邊界檢查、四方向擴散、連通分量計數與 **Flood Fill（洪水填充）** 技巧。
- **解題思維演進**：
  1. 雙層迴圈掃描整個二維網格，每當遇到 `'1'`（陸地），代表發現一座新島嶼，計數器 `res++`。
  2. 立即啟動 `dfs(grid, i, j)`，將與 `(i, j)` 相連的所有上下左右 `'1'` 全部標記為 `'0'`（淹沒島嶼）。
  3. **原地修改（In-place Flood Fill）** 可省去額外配置 `visited[m][n]` 布林矩陣的空間，且避免無限遞迴。
- **核心程式碼架構**：
  ```javascript
  function dfs(grid, i, j) {
    let m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid[i][j] === '0') return;

    grid[i][j] = '0'; // Flood fill: 標記為已造訪
    dfs(grid, i - 1, j); // 上
    dfs(grid, i + 1, j); // 下
    dfs(grid, i, j - 1); // 左
    dfs(grid, i, j + 1); // 右
  }
  ```
- **同類延伸題（專案內可對照練習）**：
  - 樹的 DFS：[`104. Maximum Depth of Binary Tree.js`](../problems/BinaryTree/104.%20Maximum%20Depth%20of%20Binary%20Tree.js) (Easy)
  - 圖的無環路徑：[`797. All Paths From Source to Target.js`](../problems/Graph/797.%20All%20Paths%20From%20Source%20to%20Target.js) (Medium)
  - 最短路徑 BFS：[`752. Open the Lock.js`](../problems/BFS/752.%20Open%20the%20Lock.js) (Medium)

---

### Day 5｜Dynamic Programming（動態規劃）：`322. Coin Change` (Medium)

- **檔案位置**：[`problems/DynamicProgramming/322. Coin Change.js`](../problems/DynamicProgramming/322.%20Coin%20Change.js)
- **對應筆記**：[`notes/algorithm.md` — Dynamic Programing](./algorithm.md#dynamic-programing)
- **題目需求（Problem Statement）**：
  - **問題描述**：給定一個整數陣列 `coins`（代表不同面額的硬幣）以及一個整數 `amount`（代表目標總金額）。請計算並回傳**湊出該總金額所需的最少硬幣數量**；如果任何硬幣組合都無法剛好湊出總金額，則回傳 `-1`。
  - **限制條件**：
    - 每種面額的硬幣都有**無限多枚**可供重複選用（完全背包問題）。
    - 當 `amount === 0` 時，所需硬幣數為 `0`。
  - **範例（Examples）**：
    ```text
    Example 1:
    Input: coins = [1, 2, 5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1，最少需要 3 枚硬幣。

    Example 2:
    Input: coins = [2], amount = 3
    Output: -1
    Explanation: 只用面額 2 的硬幣無法湊出 3，回傳 -1。
    ```
- **為什麼必讀**：
  - 動態規劃最經典的標竿題，能同時訓練 **Top-Down（遞迴 + 備忘錄 `memo`）** 與 **Bottom-Up（迭代 `dp` 陣列）** 兩種核心思維。
  - 徹底理解「為什麼貪婪法（Greedy）在硬幣面額為 `[1, 3, 4]`、目標 `6` 時會失敗（貪婪選 `4+1+1` 共 3 枚，最佳解為 `3+3` 共 2 枚）」，從而掌握動態規劃窮舉狀態轉移的必要性。
- **解題思維演進（DP 三部曲）**：
  1. **定義狀態**：`dp[i]` 代表湊出金額 `i` 所需的最少硬幣數量。
  2. **狀態轉移方程式**：
     $$\text{dp}[i] = \min_{\text{coin} \in \text{coins},\, i - \text{coin} \ge 0} \left( \text{dp}[i],\; \text{dp}[i - \text{coin}] + 1 \right)$$
  3. **Base Case 與初始化**：
     - `dp[0] = 0`（金額 0 不需任何硬幣）。
     - 其餘初始化為 `amount + 1`（代表不可能湊出的無窮大值，因最多只需 `amount` 枚 1 元硬幣）。
- **核心程式碼架構**：
  ```javascript
  var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
        if (i - coin < 0) continue;
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
  };
  ```
- **同類延伸題（專案內可對照練習）**：
  - 入門熱身：[`509. Fibonacci Number.js`](../problems/DynamicProgramming/509.%20Fibonacci%20Number.js) (Easy)
  - 連續子陣列 DP：[`53. Maximum Subarray.js`](../problems/DynamicProgramming/53.%20Maximum%20Subarray.js) (Medium)
  - 狀態機 DP：[`121. Best Time to Buy and Sell Stock.js`](../problems/DynamicProgramming/State%20Machine/121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock.js) (Easy)

---

## 三、每日練習 SOP 與驗收清單

建議每天投入 **45 ~ 60 分鐘** 完成 1 題，並遵循以下四步驟：

1. **Step 1：讀題與口述暴力解（5~10 分鐘）**
   - 不看解答，先用註解寫下暴力解的做法與時間／空間複雜度，找出效能瓶頸（例如：重複查找、重複子問題）。
2. **Step 2：套用演算法模板實作（20~25 分鐘）**
   - 對照 [`notes/algorithm.md`](./algorithm.md) 的演算法模板，獨立寫出最佳解。
3. **Step 3：手推邊界測資 Dry Run（10 分鐘）**
   - 至少手動追蹤一組正常測資與一組極端測資（例如空陣列、單一元素、找不到目標回傳 `-1`）。
4. **Step 4：執行單元測試與複習（5~10 分鐘）**
   - 本計畫 5 道題目皆已整合至 [`test/testAllCases.test.js`](../test/testAllCases.test.js)，可隨時透過測試驗證實作結果。

### 自我驗收 Checklist
- [ ] **Day 1 (`1. Two Sum`)**：能說明為何 One-pass Hash Map 不會漏掉配對，且時間複雜度為 $O(n)$。
- [ ] **Day 2 (`3. Longest Substring Without Repeating Characters`)**：能默寫 Sliding Window 外層 `while (right < n)` 擴張、內層 `while` 收縮的模板。
- [ ] **Day 3 (`33. Search in Rotated Sorted Array`)**：能清楚畫出旋轉陣列切一半後，如何用 `nums[left] <= nums[mid]` 判斷哪側有序。
- [ ] **Day 4 (`200. Number of Islands`)**：能解釋 Flood Fill 如何用原地修改 `'1' -> '0'` 取代 `visited` 陣列，並能口述如何改寫為 BFS Queue 版本。
- [ ] **Day 5 (`322. Coin Change`)**：能推導出 `dp[i] = Math.min(dp[i], 1 + dp[i - coin])`，並說明為何初始值設為 `amount + 1`。
