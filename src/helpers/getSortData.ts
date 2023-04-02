type Args<T> = {
  entity?: T;
  field?: string;
  direction?: string;
};

type Return<T> = {
  field: keyof T;
  direction?: 'ASC' | 'DESC';
};

export const getSortData = <T>({
  direction,
  field,
  entity,
}: Args<T>): Return<T> | null => {
  if (
    (direction === 'ASC' || direction === 'DESC') &&
    entity &&
    field &&
    Object.keys(entity).includes(field)
  ) {
    return {
      direction,
      field: field as keyof T,
    };
  }

  return null;
};
