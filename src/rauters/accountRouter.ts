import express, {Request, Response} from "express";

import asyncHandler from "express-async-handler";

import {readerAccountSchema, /*updatePasswordSchema, updateDataSchema*/} from "../utils/joiSchemas.js";

import {AccountController} from "../controllers/AccountController.js";

import {ReaderDto} from "../model/ReaderDto.js";

import {convertReaderDtoToReader} from "../utils/tools.js";



export const accountRouter = express.Router();
const controller =new AccountController();


accountRouter.post('/',
asyncHandler(async (req: Request,res: Response) =>{


const body = req.body;
const {error} = readerAccountSchema.validate(body);

if(error) throw new Error(JSON.stringify({status: 400,message: error.message}));

await controller.addReaderAccount(body as ReaderDto);
res.status(201).send();})
);


accountRouter.get('/:username',
asyncHandler(async (req: Request,res: Response) =>{


const {username} = req.params;
const reader = await controller["service"].getAccount(username);

res.status(200).json(reader);})
);


accountRouter.patch('/password',
asyncHandler(async (req: Request,res: Response) =>{


//const {error} = updatePasswordSchema.validate(req.body);
//if(error) throw new Error(JSON.stringify({status: 400,message: error.message}));

const {username, password} = req.body;

// @ts-ignore
await controller["service"].updatePassword(username, password);


res.send("Password updated");})
);


accountRouter.patch('/data',
asyncHandler(async (req: Request,res: Response) =>{

//const {error} = updateDataSchema.validate(req.body);
//if (error) throw new Error(JSON.stringify({ status: 400,message: error.message }));

const { username, email, birth } = req.body;

// @ts-ignore
await controller["service"].updateEmailAndBirth(username, email, birth);


res.send("User data updated");})
);


accountRouter.put('/',
asyncHandler(async (req: Request,res: Response) =>{

const body = req.body;
const { error } = readerAccountSchema.validate(body);

if(error) throw new Error(JSON.stringify({status: 400,message: error.message}));

const updatedReader = convertReaderDtoToReader(body as ReaderDto);
await controller["service"].updateAccount(updatedReader);

res.send("Account updated");})
);


accountRouter.delete('/:username',
asyncHandler(async (req: Request,res: Response) =>{

const {username} = req.params;
const deletedReader = await controller["service"].removeAccount(username);

res.status(200).json(deletedReader);})
);

