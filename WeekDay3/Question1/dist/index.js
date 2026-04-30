"use strict";
// Complete the following requirements:
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const usersWithStringAddress = data.map((_a) => {
        var { address, company } = _a, rest = __rest(_a, ["address", "company"]);
        delete address.geo;
        const stringAddress = Object.values(address).join(', ');
        const userWithStringAddress = Object.assign(Object.assign({}, rest), { company: company, address: stringAddress });
        return userWithStringAddress;
    });
    return usersWithStringAddress;
};
getData('https://jsonplaceholder.typicode.com/users')
    .then(console.log)
    .catch(console.error);
