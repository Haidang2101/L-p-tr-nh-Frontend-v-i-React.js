interface changeSpeed {
    speedUp(amount: number): void;  
    slowDown(amount: number): void; 
    stop(): void;                  
}

class Vehicle implements changeSpeed {
    private speed: number = 0; 

    speedUp(amount: number): void {
        if (amount > 0) {
            this.speed += amount;
            console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
        }
    }

    slowDown(amount: number): void {
        if (amount > 0) {
            this.speed -= amount;
            if (this.speed < 0) this.speed = 0;
            console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
        }
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng phương tiện. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

// 
const myCar = new Vehicle();
myCar.speedUp(50);  
myCar.slowDown(20); 
myCar.stop();      
