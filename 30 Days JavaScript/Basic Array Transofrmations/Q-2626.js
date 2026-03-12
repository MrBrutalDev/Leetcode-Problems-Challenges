/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc = init
    if(nums.length){
        let n = nums.length;
        for(let i = 0; i<n; i++){
            acc = fn(acc, nums[i])
        }
    }
        return acc;
};