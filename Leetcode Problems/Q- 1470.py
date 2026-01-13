class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        array1: list[int] = []
        for i in range(n):
            array1.append(nums[i])
    
        array2:list[int] = []
        for j in range(n, len(nums)):
            array2.append(nums[j])
    
        resarr: list[int] = []

        for i,j in zip(array1,array2):
            resarr.extend([i,j])
        return resarr