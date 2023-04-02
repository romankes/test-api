"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLines = void 0;
const sort_1 = require("./sort");
const filter_1 = require("./filter");
const getLines = ({ entities, direction, field, filters = {}, }) => {
    const filtered = (0, filter_1.filter)({ filters, entities });
    const sorted = (0, sort_1.sort)({ entities: filtered, direction, field });
    return sorted;
};
exports.getLines = getLines;
