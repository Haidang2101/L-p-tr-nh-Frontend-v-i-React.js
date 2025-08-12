var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    Account.prototype.login = function () {
        console.log("Phương thức login() mặc định của Account");
    };
    Account.prototype.logout = function () {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
        else {
            console.log("Không thể đăng xuất vì chưa đăng nhập");
        }
    };
    Account.prototype.checkPassword = function (password) {
        return this.password === password;
    };
    return Account;
}());
var UserAcc = /** @class */ (function (_super) {
    __extends(UserAcc, _super);
    function UserAcc(id, userName, password, role, status) {
        var _this = _super.call(this, id, userName, password, role) || this;
        _this.status = status;
        return _this;
    }
    UserAcc.prototype.login = function () {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
        else {
            console.log("Trạng thái tài khoản không hợp lệ");
        }
    };
    return UserAcc;
}(Account));
var user1 = new UserAcc(1, "nguyentrungkien", "123456", "user", "active");
user1.login();
user1.logout();
var user2 = new UserAcc(2, "tranvanhoang", "abcdef", "user", "banned");
user2.login();
user2.logout();
