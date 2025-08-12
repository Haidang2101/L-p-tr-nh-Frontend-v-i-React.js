class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }

    public login(): void {
        console.log("Phương thức login() mặc định của Account");
    }

    public logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        } else {
            console.log("Không thể đăng xuất vì chưa đăng nhập");
        }
    }

    protected checkPassword(password: string): boolean {
        return this.password === password;
    }
}

class UserAcc extends Account {
    public status: string; 

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    public login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        } else {
            console.log("Trạng thái tài khoản không hợp lệ");
        }
    }
}

let user1 = new UserAcc(1, "nguyentrungkien", "123456", "user", "active");
user1.login();
user1.logout();
let user2 = new UserAcc(2, "tranvanhoang", "abcdef", "user", "banned");
user2.login(); 
user2.logout();