import { sort } from './sort';
import { filter } from './filter';

type Args<T> = {
  entities: T[];
  field?: string;
  direction?: string;

  filters?: {
    [key: string]: string;
  };
};

export const getLines = <T>({
  entities,
  direction,
  field,
  filters = {},
}: Args<T>): T[] => {
  const filtered = filter({ filters, entities });
  const sorted = sort({ entities: filtered, direction, field });

  return sorted;
};
