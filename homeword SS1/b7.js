   restParameter = (...args) => {
            const reduce = [];
            for (let arr of args) {
                if(!Array.isArray(arr)) {
                   reduce.push(null);
                   continue;
                }
                let sum = arr.reduce((a, b) => {
                    if (typeof a === 'number' && typeof b === 'number') {
                        return a + b;
                    } else {
                        return null;
                    }
                }, 0);
                reduce.push(sum);
            }
            return reduce;
        }
        console.log(restParameter([1,2], [6,7,8], [12,8]));