"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortData = void 0;
const getSortData = ({ direction, field, entity, }) => {
    if ((direction === 'ASC' || direction === 'DESC') &&
        entity &&
        field &&
        Object.keys(entity).includes(field)) {
        return {
            direction,
            field: field,
        };
    }
    return null;
};
exports.getSortData = getSortData;
