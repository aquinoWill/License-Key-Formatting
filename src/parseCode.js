"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCode = void 0;
var parseCode = function (code, maxValue) {
    var splitVal = code.split('-');
    console.log(splitVal[1].substring(maxValue));
};
exports.parseCode = parseCode;
