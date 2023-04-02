import { getSortData } from './getSortData';

type Args<T> = {
  field?: string;
  entities: T[];
  //   direction: 'ASC' | 'DESC';
  direction?: string;
};

export const sort = <T>({ direction, entities, field }: Args<T>) => {
  if (entities.length) {
    const sortData = getSortData({ direction, entity: entities[0], field });

    if (sortData) {
      const newArr = [...entities];

      const { field, direction } = sortData;

      newArr.sort((prev, curr) =>
        (
          (direction === 'ASC' ? prev : curr)[field] as unknown as string
        ).localeCompare(
          (direction === 'ASC' ? curr : prev)[field] as unknown as string
        )
      );

      return newArr;
    }
  }

  return entities;
};
