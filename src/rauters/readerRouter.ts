import {Router} from 'express';

export const readerRouter = Router();


readerRouter.get('/',(req,
res) =>{

res.json({message: 'list of readers!'});
});


readerRouter.post('/',(req,
res) =>{

const {name, email} = req.body;

res.status(201).json({ message: `Reader ${name} added!`, email });
});
