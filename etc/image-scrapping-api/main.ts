import express, { Request, Response, NextFunction } from 'express';
import { searchImages } from './scrapper.service';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const keyword: string = req.query.keyword;
    searchImages(keyword).then(images => res.json({ data: images }));
});

app.listen(8080, () => console.log('Servidor escutando na porta 8080'));
