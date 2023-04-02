"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const getSortData_1 = require("./getSortData");
const sort = ({ direction, entities, field }) => {
    if (entities.length) {
        const sortData = (0, getSortData_1.getSortData)({ direction, entity: entities[0], field });
        if (sortData) {
            const newArr = [...entities];
            const { field, direction } = sortData;
            newArr.sort((prev, curr) => (direction === 'ASC' ? prev : curr)[field].localeCompare((direction === 'ASC' ? curr : prev)[field]));
            return newArr;
        }
    }
    return entities;
};
exports.sort = sort;
