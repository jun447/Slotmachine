// Binary search algo in javascript 6   //  https://www.youtube.com/watch?v=_X-_q-_X-_q     /
// /  https://www.youtube.com/watch?v=_X-_q-_X-_q
// /  https://www.youtube.com/watch?v=_X-_q-_X-_q

// int binarySearch(int arr[], int l, int r, int x) {
//     if (r >= l) {
//         int mid = l + (r - l) / 2;
//         if (arr[mid] == x)
//             return mid;
//         if (arr[mid] > x)
//             return binarySearch(arr, l, mid - 1, x);
//         return binarySearch(arr, mid + 1, r, x);
//     }
//     return -1;
// }
// int bubbleSort(arr[], int n) {
//     int i, j;
//     for (i = 0; i < n - 1; i++)
//         for (j = 0; j < n - i - 1; j++)
//             if (arr[j] > arr[j + 1])
//                 swap(&arr[j], &arr[j + 1]);
// })
// int mergeSort(arr[], int l, int r) {
//     if (l < r) {
//         int m = l + (r - l) / 2;
//         mergeSort(arr, l, m);
//         mergeSort(arr, m + 1, r);
//         merge(arr, l, m, r);
//     }
// }
// int slidingWindow(arr[], int n) {
//     int i, j, k;
//     for (i = 0; i < n; i++) {
//         for (j = i; j < n; j++) {
//             for (k = i; k < j; k++) {
//                 if (arr[k] > arr[j]) {
//                     swap(&arr[k], &arr[j]);
//                 }
//             }
//         }
//     }
// }
// int insertionSort(arr[], int n) {
//     int i, j;
//     for (i = 1; i < n; i++) {
//         j = i - 1;
//         int key = arr[i];
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }
// int queue(arr[], int n) {
//     int i, j;
//     for (i = 1; i < n; i++) {
//         int key = arr[i];
//         j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }
//javascript Program to Implement Queue using Array