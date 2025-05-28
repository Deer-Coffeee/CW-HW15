import {AccountService} from "./AccountService.js";

import {Reader} from "../model/Reader.js";

import {ReaderModel} from "../model/ReaderMongo.js";


export class AccountServiceImplMongo implements AccountService{


    async addAccount(reader:Reader):Promise<void>{

        const isExists =
            await ReaderModel.findOne({readerId:reader.readerId});

        if(isExists){
            throw new Error(JSON.stringify({status: 409, message: "Reader already exists"}));
        }

        const readerDoc = new ReaderModel(reader);

        await readerDoc.save();}


    async getAccount(userName: string): Promise<Reader>{

        const reader =
            await ReaderModel.findOne({readerId:userName});

        if(!reader){
            throw new Error(JSON.stringify({status: 404, message: "Reader not found"}));
        }

        return reader;}

    async updateAccount(reader: Reader): Promise<void>{

        const result =
            await ReaderModel.updateOne({readerId:reader.readerId},reader);

        if(result.matchedCount === 0){
            throw new Error(JSON.stringify({status: 404, message: "Reader not found for update"}));
        }
    }

    async removeAccount(userName: string): Promise<Reader>{

        const reader =
            await ReaderModel.findOneAndDelete({readerId: userName});

        if(!reader){
            throw new Error(JSON.stringify({status: 404, message: "Reader not found for deletion"}));
        }

        return reader;}
}