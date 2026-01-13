class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count: int = 0
        maxcount : int = 0
        for num in nums:
            if num == 1:
                count +=1
                maxcount = max(maxcount, count)
            else:
                count = 0
        return maxcount
        