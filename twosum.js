var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    nums1 = [...nums2];
  }

  if (n !== 0 && m !== 0) {
    let indexCount = 0;
    const length = nums1.length;
    for (let i = 0; i < n; i++) {
      if (nums2[i] > nums1[indexCount]) {
        if (nums1[indexCount] != 0) {
          while (nums2[i] > nums1[indexCount] && nums1[indexCount] !== 0) {
            indexCount++;
          }

          if (nums1[indexCount] === 0) {
            while (i < n) {
              nums1.splice(indexCount, 0, nums2[i]);
              i++;
              indexCount++;
            }
            i--;
            const zeroCount = length - n;
            nums1.splice(indexCount, zeroCount);
          }
        }
      }

      if (nums2[i] === nums1[indexCount]) {
        nums1.splice(indexCount, 0, nums2[i]);
      }

      if (nums2[i] < nums1[indexCount]) {
        nums1.splice(indexCount, 0, nums2[i]);
        i++;
      }
    }
  }
};

merge([0], 0, [1], 1);
