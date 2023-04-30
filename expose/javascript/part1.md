1. 20
2. 20
3. 20
4. error
   1. It was an uncaught reference error. Because let has block scope instead of function scope, and line 13 which result, which is a let, is not in the same block as when let was first declared, it does not have access to result, resulting in an error
5. error
   1. It was an uncaught type error, because we tried to assign a new value to a const variable, which can not be changed
6. error
   1. the code does not get executed because line 9 returned an error
