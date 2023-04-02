type Args<T> = {
  entities: T[];
  filters: {
    [key: string]: string;
  };
};

export const filter = <T>({ entities, filters }: Args<T>): T[] => {
  const filtersArr = Object.entries(filters);

  if (filtersArr.length) {
    const transformedFilters = filtersArr.map(([key, value]) => [
      (key as string).replace('search_', ''),
      value,
    ]);

    return entities.filter((entity) => {
      return transformedFilters.every(([key, value]) =>
        (entity[key as keyof typeof entity] as unknown as string)
          ?.toLowerCase()
          ?.includes(value.toLowerCase())
      );
    });
  }

  return entities;
};
