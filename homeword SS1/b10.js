nhomChuoiKyTu = (mangChuoi) => {
            const nhom = {};
            for (let chuoi of mangChuoi){
                let key = chuoi.split('').sort().join('');
                if (!nhom[key]) {
                    nhom[key] = [];
                }
                nhom[key].push(chuoi);
            }
            return Object.values(nhom);
        }
        console.log(["eat", "tea", "tan", "ate", "nat", "bat"]);
        
        console.log(nhomChuoiKyTu(["eat", "tea", "tan", "ate", "nat", "bat"]));