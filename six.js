function nCr(n, r) {
    if (r > n)
        return 0;
    if (r === 0 || r === n)
        return 1;
    return nCr(n-1, r-1) + nCr(n-1, r);
}
 
console.log(nCr(5, 3));