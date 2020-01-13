// js 中深拷贝
function deepClone(obj) {
    var target = {};
    for(var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'object') {
                target[key] = deepClone(obj[key]); 
            } else {
                target[key] = obj[key];
            }
        }
    }
    return target;
}

export default deepClone;

// 深拷贝
// function deepClone(obj) {
//     var result = {};
//     for (var key in obj) {
//         if (Object.prototype.hasOwnProperty(obj, key)) {
//             if (typeof obj[key] === 'object') {
//                 result[key] = deepClone(obj[key]);
//             } else {
//                 result[key] = obj[key]
//             }
//         }
//     }
// }