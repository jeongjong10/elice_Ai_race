function Counter() {
    let count;
    function getCount() {
        return this.count;
    }
    function increase() {
        this.count += 1;
    }
    function decrease() {
        this.count -= 1;
    }
    return {getCount, increase, decrease};
};