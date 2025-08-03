 chenMang = (mang1, mang2, vitri) => {
           if(!Array.isArray(mang1) || !Array.isArray(mang2) || typeof vitri !== 'number') {
               console.log("Phần tử tham gia không phải là mảng");
            }
            if (typeof vitri !== 'number' || !Number.isInteger(vitri) || vitri < 0 || vitri > mang1.length) {
                console.log("Vị trí chèn không hợp lệ");
                return;
            }
            const mangKetQua = [
                ...mang1.slice(0, vitri),
                ...mang2,
                ...mang1.slice(vitri)
            ];
            return mangKetQua;
        }
        console.log(chenMang([1,2,3,7,8], [4,5,6], 3));