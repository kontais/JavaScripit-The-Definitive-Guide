var serialnum = {
    $n:0,
    get next() {return this.$n++;},
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw "序列号的值不能比当前值小";
    }
};

console.log(serialnum.next);
console.log(serialnum.next);

serialnum.next = 6;

console.log(serialnum.next);

serialnum.next = 2;

console.log(serialnum.next);
