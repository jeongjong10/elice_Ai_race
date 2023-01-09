const Counter = {
    count: 0,
    getCount: function () {
        return this.count;
    },
    resetCount: function () {
        this.count = 0;
    },
    incrementSync: function () {
        // 동기적 방법으로 3초 뒤에 this.count를 증가
        const currentTime = Date.now();
        while(true)
        {
            if ((Date.now() - currentTime) > 3000 )
            {
                this.count++;
                break;
            }
        }
    }

    incrementAsync: function (callback) {
        setTimeout( () => {
            this.count++;
            callback;
        }, 3000);
    },
}