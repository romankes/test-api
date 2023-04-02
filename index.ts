import express from 'express';

import cors from 'cors';
import { getTable } from './src/controllers';

const CONFIG = {
  PORT: 3001,
};

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', getTable);

app.listen(CONFIG.PORT, () => {
  console.log(`Example app listening at http://localhost:${CONFIG.PORT}`);
});
