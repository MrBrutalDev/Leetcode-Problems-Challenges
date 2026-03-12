/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions, x) {
    
    return function(x) {
        let result = x;
        fnLength = functions.length
        for(let i = fnLength-1; i>=0; i--){
            result = functions[i](result)
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */