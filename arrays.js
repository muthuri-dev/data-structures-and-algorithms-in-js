//  Find The Lowest Value in an Array
/*
Go through the values in the array one by one.
Check if the current value is the lowest so far, and if it is, store it.
After looking at all the values, the stored value will be the lowest of all values in the array. 
*/

/*
Create a variable 'minVal' and set it equal to the first value of the array.
Go through every element in the array.
If the current element has a lower value than 'minVal', update 'minVal' to this value.
After looking at all the elements in the array, the 'minVal' variable now contains the lowest value.
Variable 'minVal' = array[0]
For each element in the array
    If current element < minVal
        minVal = current element
 */

//bubble sort algorithm
/* 
An array with values to sort.
An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.

bubble sort improvement
-Imagine that the array is almost sorted already, with the lowest numbers at the start,
-If the algorithm goes through the array one time without swapping any values, the array must be finished sorted, and we can stop the algorithm,

-This means there are n⋅n comparisons done in total, so the time complexity for Bubble Sort is:O(n2)
–––––––
 
*/

//Selection Sort
/*
- finds the lowest value in an array and moves it to the front of the array.
-steps
Go through the array to find the lowest value.
Move the lowest value to the front of the unsorted part of the array.
Go through the array again as many times as there are values in the array.

-steps
An array with values to sort.
An inner loop that goes through the array, finds the lowest value, and moves it to the front of the array. This loop must loop through one less value each time it runs.
An outer loop that controls how many times the inner loop must run. For an array with n
 values, this outer loop must run n−1 times.

 -Selection Sort must run the loop to find the lowest value approximately n times.

We get time complexity:O(n2⋅n)=O(n2)

 */

// Insertion Sort
/*
-Insertion Sort algorithm uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.
-steps
Take the first value from the unsorted part of the array.
Move the value into the correct place in the sorted part of the array.
Go through the unsorted part of the array again as many times as there are values.

 Selection Sort must run the loop to insert a value in its correct place approximately n times.

We get time complexity for Insertion Sort:O(n2⋅n)=O(n2)

 */

//Quicksort
/*
-steps
Choose a value in the array to be the pivot element.
Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.

 */

//Counting Sort
/*
-The Counting Sort algorithm sorts an array by counting the number of times each value occurs.
-steps
Create a new array for counting how many there are of the different values.
Go through the array that needs to be sorted.
For each value, count it by increasing the counting array at the corresponding index.
After counting the values, go through the counting array to create the sorted array.
For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index.


In a best case scenario, the range of possible different values k is very small compared to the number of values n and Counting Sort has time complexity O(n).
But in a worst case scenario, the range of possible different values k is very big compared to the number of values n and Counting Sort can have time complexity O(n2) or even worse.


 */

//Merge Sort
/*
-The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.
-steps
An array with values that needs to be sorted.
A function that takes an array, splits it in two, and calls itself with each half of that array so that the arrays are split again and again recursively, until a sub-array only consist of one value.
Another function that merges the sub-arrays back together in a sorted way.

-The time complexity for Merge Sort is O(n⋅logn)

 */

//Linear Search
/*
-The Linear Search algorithm searches through an array and returns the index of the value it searches for.
-steps
Go through the array value by value from the start.
Compare each value to check if it is equal to the value we are looking for.
If the value is found, return the index of that value.
If the end of the array is reached and the value is not found, return -1 to indicate that the value was not found.

-This means that time complexity for Linear Search is O(n) 
*/
//A big difference between sorting algorithms and searching algorithms is that sorting algorithms modify the array, but searching algorithms leave the array unchanged.

//Binary search
/*
-The Binary Search algorithm searches through an array and returns the index of the value it searches for.

-How it works:
Check the value in the center of the array.
If the target value is lower, search the left half of the array. If the target value is higher, search the right half.
Continue step 1 and 2 for the new reduced part of the array until the target value is found or until the search area is empty.
If the value is found, return the target value index. If the target value is not found, return -1.

Manual Run Through: What Happened?
To start with, the algorithm has two variables "left" and "right".

"left" is 0 and represents the index of the first value in the array, and "right" is 6 and represents the index of the last value in the array.

(left+right)/2=0+6)/2=3 is the first index used to check if the middle value (7) is equal to the target value (11).

7 is lower than the target value 11, so in the next loop the search area must be limited to the right side of the middle value: [ 11, 15, 25], on index 4-6.

To limit the search area and find a new middle value, "left" is updated to index 4, "right" is still 6. 4 and 6 are the indexes for the first and last values in the new search area, the right side of the previous middle value. The new middle value index is 
(left+right)/2=(4+6)/2=10/2=5.

The new middle value on index 5 is checked: 15 is higher than 11, so if the target value 11 exists in the array it must be on the left side of index 5. The new search area is created by updating "right" from 6 to 4. Now both "left" and "right" is 4, 
(left+right)/2=(4+4)/2=4, so there is only index 4 left to check. The target value 11 is found at index 4, so index 4 is returned.

In general, this is the way the Binary Search algorithm continues to halve the array search area until the target value is found.

When the target value is found, the index of the target value is returned. If the target value is not found, -1 is returned.

-Time complexity for Binary Search is O(log2n)

 */
