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
            return transformedFilters.every(([key, value]) => entity[key]
                .toLowerCase()
                .includes(value.toLowerCase()));
        });
    }
    return entities;
};
exports.filter = filter;
