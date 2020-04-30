"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transferStringTemplate(templateString, inserts) {
    return templateString === null || templateString === void 0 ? void 0 : templateString.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, function (v, val) {
        return inserts[val];
    });
}
exports.transferStringTemplate = transferStringTemplate;
function getValueByObjPath(objectPath, data) {
    return objectPath === null || objectPath === void 0 ? void 0 : objectPath.split('.').reduce(function (val, next) {
        return val[next];
    }, data);
}
exports.getValueByObjPath = getValueByObjPath;
//# sourceMappingURL=utils.js.map