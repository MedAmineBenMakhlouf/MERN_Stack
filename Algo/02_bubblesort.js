


const nums1 = [5, 3, 4, 2, 1]
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]

// function bubbleSort(nums) {
//     let n = nums.length
//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 let temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//         n--;
//         console.log(n)
//     } while (swapped);

//     return nums;
// }

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (j = 0; j < (nums.length - i) - 1; j++) {
            if ((nums[j] > nums[j + 1])) {
                var tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
                // console.log(i,j,nums)
            }
        }
    } return nums;


}

console.log(bubbleSort(nums1))