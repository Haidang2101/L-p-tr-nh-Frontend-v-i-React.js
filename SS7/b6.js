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
    function Account(id, username, password, isLogin, role) {
        this.id = id;
        this.userName = username;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    Account.prototype.login = function (password) {
        if (this.password === password) {
            console.log("Đăng nhập thành công");
            this.isLogin = true;
        }
        else {
            console.log("Đăng nhập thất bại");
            this.isLogin = false;
        }
    };
    Account.prototype.logout = function () {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
        else {
            console.log("Bạn chưa đăng nhập");
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, username, password, isLogin, role, status) {
        var _this = _super.call(this, id, username, password, isLogin, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.login = function (password) {
        if (this.status === "banned") {
            console.log("T\u00E0i kho\u1EA3n ".concat(this.userName, " \u0111\u00E3 b\u1ECB kh\u00F3a"));
            return;
        }
        _super.prototype.login.call(this, password);
    };
    return userAcc;
}(Account));
var allUsers = [];
var adminAcc = /** @class */ (function (_super) {
    __extends(adminAcc, _super);
    function adminAcc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    adminAcc.prototype.banUser = function (userName) {
        var user = allUsers.find(function (u) { return u.userName === userName; });
        if (user) {
            user.status = "banned";
            console.log("Admin ".concat(this.userName, " \u0111\u00E3 c\u1EA5m t\u00E0i kho\u1EA3n ").concat(user.userName));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y user theo userName");
        }
    };
    return adminAcc;
}(Account));
var u1 = new userAcc(1, "Leon", "123456", false, "user", "active");
var u2 = new userAcc(2, "Adam", "abcdef", false, "user", "active");
allUsers.push(u1, u2);
var admin = new adminAcc(99, "superadmin", "adminpass", false, "admin");
console.log(u1.status);
admin.banUser("Leon");
console.log(u1.status);
