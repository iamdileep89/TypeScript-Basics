// class NewPerson {
//     name: string
//     age: number
//     instantiatedAt = Date
//     constructor(name: string,age:  number){
//          this.name = name
//          this.age = age
//     }
// }
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.clear = function () {
        console.clear();
    };
    ConsoleLogger.prototype.debug = function (message, metadata) {
        console.info("[DEBUG] ".concat(message), metadata);
    };
    ConsoleLogger.prototype.info = function (message, metadata) {
        console.info("".concat(message), metadata);
    };
    ConsoleLogger.prototype.warn = function (message, metadata) {
        console.info("".concat(message), metadata);
    };
    ConsoleLogger.prototype.error = function (message, metadata) {
        console.info("".concat(message), metadata);
    };
    return ConsoleLogger;
}());
