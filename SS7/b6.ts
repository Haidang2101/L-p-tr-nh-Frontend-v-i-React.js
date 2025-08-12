class Account {
    public id: number;
    public userName: string;
    private password: string; 
    public isLogin: boolean;
    public role: string;

    constructor(id: number, username: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = username;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    public login(password: string): void {
        if (this.password === password) {
            console.log("Đăng nhập thành công");
            this.isLogin = true;
        } else {
            console.log("Đăng nhập thất bại");
            this.isLogin = false;
        }
    }

    public logout(): void { 
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        } else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}

class userAcc extends Account {
    public status: "active" | "banned";

    constructor(id: number, username: string, password: string, isLogin: boolean, role: string, status: "active" | "banned") {
        super(id, username, password, isLogin, role);
        this.status = status;
    }

    public override login(password: string): void {
        if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
            return;
        }
        super.login(password);
    }
}

const allUsers: userAcc[] = [];

class adminAcc extends Account {
    public banUser(userName: string): void {
        const user = allUsers.find(u => u.userName === userName);
        if (user) {
            user.status = "banned";
            console.log(`Admin ${this.userName} đã cấm tài khoản ${user.userName}`);
        } else {
            console.log(`Không tìm thấy user theo userName`);
        }
    }
}

const u1 = new userAcc(1, "Leon", "123456", false, "user", "active");
const u2 = new userAcc(2, "Adam", "abcdef", false, "user", "active");


allUsers.push(u1, u2);


const admin = new adminAcc(99, "superadmin", "adminpass", false, "admin");
console.log(u1.status);
admin.banUser("Leon");
console.log(u1.status);