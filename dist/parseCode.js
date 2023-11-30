"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCode = void 0;
const parseCode = (str, maxValue) => {
    const splitVal = str.split('-');
    str = str.replace(splitVal[0], '');
    str = str.replace(/\W+/g, "");
    str = str.match(new RegExp('.{1,' + maxValue + '}', 'g')).join('-').toUpperCase();
    return `${splitVal[0]}-${str}`;
};
exports.parseCode = parseCode;
//# sourceMappingURL=parseCode.js.map