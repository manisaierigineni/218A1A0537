function Sumd(n){
    var d,s=0;
    while(n>0)
    {
        d = n % 10;
        s = s + d;
        n = n // 10;
    }
    return s;
}

console.log(Sumd(123))
