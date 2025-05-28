import {Request} from 'express'

export interface AuthRequest extends Request{
   username?:string,
    role?: Role
}

export enum Role{

USER = "USER",

ADMIN = "ADMIN",

LIBRARIAN = "LIBRARIAN"
}