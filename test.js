function addTo80(n) {
    console.log('long  time')
    return n + 80;
}


function memoizedAddTo80(n) {
    let cache = {}
    return function(n) {
        if (n in cache) {
            cache[n] = cache[n] + 1
            return cache;
        } else {
            console.log(cache)
            cache[n] = 0;
            return cache
        }
    }
}
const memoized = memoizedAddTo80();
console.log('1', memoized(5))
console.log('2', memoized(6))
console.log('3', memoized(6))

