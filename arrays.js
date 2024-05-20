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
