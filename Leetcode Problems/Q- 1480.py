class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        array = []
        for i in range(len(nums)):
            if i == 0:
                array.append(nums[i])
            else:
                length = len(array)
                array.append(array[length-1] + nums[i]) 
        return array
    
