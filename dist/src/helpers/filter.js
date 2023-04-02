"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = ({ entities, filters }) => {
    const filtersArr = Object.entries(filters);
    if (filtersArr.length) {
        const transformedFilters = filtersArr.map(([key, value]) => [
            key.replace('search_', ''),
            value,
        ]);
        return entities.filter((entity) => {
            return transformedFilters.every(([key, value]) => {
                var _a, _b;
                return entity[key]
                    ? (_b = (_a = entity[key]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(value.toLowerCase())
                    : true;
            });
        });
    }
    return entities;
};
exports.filter = filter;
