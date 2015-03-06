"use strict";

module.exports = function (obj, func, ctx) {
    if (!obj) return null;
    var result = {};
    for (var key in obj)
        if (obj.hasOwnProperty(key))
            result[key] = func.call(ctx, obj[key], key);

    return result;
};
