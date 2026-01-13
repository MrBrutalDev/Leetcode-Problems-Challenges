/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init
    
    return {
        increment(){
            return ++count
        },

        decrement(){
            return --count
        },

        reset(){
            count = init
            return count
        }
    }
}
