// easy
const twoSum = function(nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const expect = target - nums[i];
        if (numsMap.has(expect)) {
            return [numsMap.get(expect), i]
        } else {
            numsMap.set(nums[i], i);
        }
    }
    return -1;
};