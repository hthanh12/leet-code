/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let result = []
    if(nums.length == 2 && nums[0]+nums[1]==target){
        return [0,1]
    }
    nums.forEach((num,index) => {
            if(target - num <= num){
                let indexSecond = nums.lastIndexOf(target-num)
                if(indexSecond != -1 && indexSecond != index){
                    result = [index, indexSecond]
                    return
                }
            }
    });
    return result
}


