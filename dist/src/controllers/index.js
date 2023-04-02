"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTable = void 0;
const MockData_1 = require("../MockData");
const getLines_1 = require("../helpers/getLines");
const getTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.query, { tableName, sortDirection, sortField } = _a, filters = __rest(_a, ["tableName", "sortDirection", "sortField"]);
    const tableData = MockData_1.TABLES[tableName];
    if (tableData) {
        const lines = (0, getLines_1.getLines)({
            entities: tableData.lines,
            direction: sortDirection,
            field: sortField,
            filters: filters,
        });
        res.json(Object.assign(Object.assign({}, tableData), { lines }));
        return;
    }
    res.sendStatus(400);
});
exports.getTable = getTable;
