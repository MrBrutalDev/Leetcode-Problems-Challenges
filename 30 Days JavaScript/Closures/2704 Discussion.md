### For those who don't know how to create **Objects** in js

# Throw An Error in JS
```JavaScript
throw new Error("Error Message")
```

# Approach 1 - Easy Way

```JavaScript
let yourObject ={
    toBe: function(val2) { //method1
    // your logic
    }

    notToBe: function(val2){ //method2
        // your logic 
    }
}
return yourObject
```
**Dont use variable name as `object` as it is built-in global in JS so don't use this as variable name**

# Approach 2 - By Closure
```JavaScript
var expect = function(val){

    return {
        toBe(val2){ //method1
            // your logic
        }

        notToBe(val2){ //method2
            // your logic
        }
    }
} 
```

# Approach 3 - Named Function
```JavaScript
var expect = function(val){

    function toBe(val2){ //method1
        // your logic
    }

    function notToBe(val2){ //method2
        //your logic
    }

return {toBe, notToBe}
}
```
