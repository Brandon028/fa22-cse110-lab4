1. "3" is logged
   1. i, which is a *var* type, has function scope, which means that even after the loop which it was declared has finished running, a line in the same function could still access its value, which was incremented 3 times from 0 in the loop, totaling up to 3, then logged
2. "150" is logged
   1. discountedPrice, which is a *var* type, has function scope, which means that even after the loop which it was declared has finished running, a line in the same function could still access its value, which from last iteration of the loop, was 150, because it was the 50% of the last price, 300, 150 was then logged
3. "150" is logged
   1. finalPrice, which is a *var* type, had its value continuously updated in the loop, which from last iteration of the loop, was 150, because it was the rounded result of the discountedPrice at the same iteration of the loop, which was 150.
4. "50, 100, 150" is returned
   1. after every iteration of the loop, discounted had one more element, the finalPrice at that iteration, added to the end of the array, which was 50 from the 1st iteration, 100 from the 2nd iteration, and 150 from the 3rd iteration. The array was then returned.
5. error
   1. i, which is a *let* type, has block scope, which means that after the loop which it was declared has finished running, a line in the same function but not in the same block could not access its value, which line 12 tried to do, causing an error.
6. error
   1. discountedPrice, which is a *let* type, has block scope, which means that after the loop which it was declared has finished running, a line in the same function but not in the same block could not access its value, which line 13 tried to do, causing an error.
7. "150" is logged
   1. finalPrice, which is a *let* type, had its value continuously updated in the loop, which from last iteration of the loop, was 150, because it was the rounded result of the discountedPrice at the same iteration of the loop, which was 150. No error was caused because line 14, which accessed finalPriced, is in the same block as when it was first declared.
8. "50, 100, 150" is returned
   1. after every iteration of the loop, discounted had one more element, the finalPrice at that iteration, added to the end of the array, which was 50 from the 1st iteration, 100 from the 2nd iteration, and 150 from the 3rd iteration. The array was then returned. No error was caused because the return statement, which accessed discounted, is in the same block as when it was first declared, and the loop which changed appended to the array is also within that block.
9. error
   1.  i, which is a *let* type, has block scope, which means that after the loop which it was declared has finished running, a line in the same function but not in the same block could not access its value, which line 11 tried to do, causing an error.
10. 3
    1.  length, which is a *const* type, was declared as the length of the array prices, which had 3 elements, and could not have been changed, was logged on line 12.
11. "50, 100, 150" is returned
   1. after every iteration of the loop, discounted had one more element, the finalPrice at that iteration, added to the end of the array, which was 50 from the 1st iteration, 100 from the 2nd iteration, and 150 from the 3rd iteration. The array was then returned. Even though the *const* keyword prevents variables from being modified, *const* arrays can still be modified
12. notations
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
    
13. arithmetic
    1.  '32'
        1.  the integer 2 was mapped to its string representation '2' and appended to the string '3'
    2.  1
        1.  the string '2' was mapped to its integer representation 2 and subtracted from 3
    3.  3
        1.  the null value was mapped to its integer representation 0 and added onto 3
    4. '3null'
        1. the null value was mapped to its string representation 'null' and appended to the string '3'
    5. 4
        1. the boolean value true was mapped to its integer representation 1 and added onto 3
    6. 0
        1. the boolean value false was mapped to its integer representation 0 and appended the null value which was mapped to its integer representation 0
    7. '3undefined'
        1. the undefined value was mapped to its string representation 'undefined' and appended to the string '3'
    8. NaN
        1.  the undefined value was mapped to its integer representation NaN and subtracted the string '3' which was mapped to its integer value 3, resulting in NaN because NaN is not a number and can not be added or subtracted with
14. comparison: all boolean comparisons result in a boolean value
    1.  true
        1.  the string '2' was mapped to its integer representation 2 and was greater than 1
    2.  false
        1.  the string '2' comes after lexicographical (is greater) than the string '12'
    3.  true
        1.  the string '2' was mapped to its integer representation 2 and was equal to 2
    4.  false
        1.  2 is an integer, which is a different data type than '2', which is a string
    5.  false
        1. the boolean value true was mapped to its integer representation 1 and was not equal to 2
    6.  true
        1. the boolean value true was equal to the Boolean(2), which explicitly converted the integer 2 to the boolean value true
15. the == operator first converts the two operands to the same type if they are different before checking for equality, but the === operator always returns false if the two operands are different types before checking the equality
16. part2-question16.js
17. 2,4,6
    1.  the function modifyArray first takes in two parameters, the array [1,2,3] and the function doSomething
    2.  it declares a new empty array
    3.  it loops through the length of [1,2,3], which is 3, so 3 times, every time appending the result of doSomething(array[i]), where array[i] is 1 in the 1st iteration, 2 in the 2nd iteration, and 3 in the 3rd iteration, because those are the elements of the array passed into modifyArray
    4.  every iteration of the loop, the empty array declared in step 2 is appended with the result of doSomething at that iteration which is the argument passed in * 2. So in every iteration
        1.  1 * 2 = 2
            1.  2 was appended to the empty array
        2.  2 * 2 = 4
            1.  4 was appended to the empty array
        3.  3 * 2 = 6
            1.  6 was appended to the empty array
    5. the result is the array [2,4,6]
18. part2-question18.js
19. 1, 4, 3, 2
    1.  1, 4, 3, were first printed at approximately the same second on different lines because the console.log() was called on different lines, before 2 was printed 1000 ms later, again on another different line

