import { RequestHandler } from 'express';
import { TABLES } from '../MockData';
import { sort } from '../helpers/sort';
import { getLines } from '../helpers/getLines';

export const getTable: RequestHandler = async (req, res) => {
  const { tableName, sortDirection, sortField, ...filters } = req.query;

  const tableData = TABLES[tableName as keyof typeof TABLES];

  if (tableData) {
    const lines = getLines<typeof tableData.lines[0]>({
      entities: tableData.lines,
      direction: sortDirection as string,
      field: sortField as string,
      filters: filters as { [key: string]: string },
    });

    res.json({ ...tableData, lines });

    return;
  }

  res.sendStatus(400);
};
