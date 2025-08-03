sapXepMang = (mang1, mang2) => {
            if(!Array.isArray(mang1) || !Array.isArray(mang2)) {
                console.log("Phần tử tham gia không phải là mảng");
                return;
            }
            let i = 0, j = 0;
            let mangKetQua = [];
            while (i < mang1.length && j < mang2.length) {
                if (mang1[i] < mang2[j]) {
                    mangKetQua.push(mang1[i]);
                    i++;
                } else {
                    mangKetQua.push(mang2[j]);
                    j++;
                }
            }
            while (i < mang1.length) {
                mangKetQua.push(mang1[i]);
                i++;
            }
            while (j < mang2.length) {
                mangKetQua.push(mang2[j]);
                j++;
            }
            return mangKetQua;
        }

        console.log(sapXepMang([1, 2, 3, 5, 9], [4, 6, 7, 8]));