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
        return val[next] || "";
    }, data);
}
exports.getValueByObjPath = getValueByObjPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFnQixzQkFBc0IsQ0FBQyxjQUFzQixFQUFFLE9BQW9CO0lBQ2pGLE9BQU8sY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFXO1FBQzNFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3JCLENBQUMsRUFBQztBQUNKLENBQUM7QUFKRCx3REFJQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLFVBQWtCLEVBQUUsSUFBaUI7SUFDckUsT0FBTyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTtRQUM3QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDeEIsQ0FBQyxFQUFFLElBQUksRUFBQztBQUNWLENBQUM7QUFKRCw4Q0FJQyJ9