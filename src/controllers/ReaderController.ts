import {Request, Response} from 'express';

//import {convertReaderDtoToReader} from '../utils/converters.js';

//import {ReaderModel} from '../model/reader.model.js';


export const registerReader =
async (req: Request, res: Response) =>{

try{
const readerDto = req.body;

//const reader = convertReaderDtoToReader(readerDto);


//const createdReader =
//await ReaderModel.create(reader);

//res.status(201).json(createdReader);

}catch (error){

console.error('Error creating reader:', error);

res.status(500).json({ message: 'Internal Server Error' });
}
};
