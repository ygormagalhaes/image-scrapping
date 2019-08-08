import express, { Request, Response, NextFunction } from 'express';
import { searchImages } from './scrapper.service';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const keyword: string = req.query.keyword;
    searchImages(keyword).then(images => res.json({ data: images }));
});

app.listen(8080, () => console.log('Servidor escutando na porta 8080'));
