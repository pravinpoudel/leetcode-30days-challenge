/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let tempObject = {};
  for (let i = 0, length = nums.length; i < length; i++) {
    let reqNum = target - nums[i];
    if (reqNum in tempObject) {
      return [tempObject[reqNum], i];
    }
    tempObject[nums[i]] = i;
  }
};
