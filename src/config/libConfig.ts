import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import {AccountServiceImplMongo} from "../service/AccountServiceImplMongo.js";
import {AccountService} from "../service/AccountService.js";
import {Role} from "../utils/libTypes.js";
export const PORT = 3500;
export const db = 'mongodb+srv://konspirin:2j51Z79bDwf8L2TA@cluster0.5rziody.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0'

dotenv.config();
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT? +process.env.DB_PORT : undefined,
    database: process.env.DB_NAME,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

export const accService:AccountService = new AccountServiceImplMongo();

export const skipPaths = [
    '/accountsPOST'
]

export const pathsRoles:Record<string,Role[]> ={
    '/accountsPOST': [Role.ADMIN],

    '/accountsPUT': [Role.USER, Role.ADMIN],

    //'/accounts/passwordPATCH': [Role.USER, Role.ADMIN],

    //'/accountsDELETE': [Role.ADMIN],
};
