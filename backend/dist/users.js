"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'juliana@gmail.com': new User('juliana@gmail.com', 'Juliana', 'juliana23'),
    'amanada@gmail.com': new User('amanada@gmail.com', 'Amanda', 'amanda21')
};
