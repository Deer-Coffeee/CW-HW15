import Joi, { ObjectSchema } from "joi";
import { BookDto } from "../model/BookDto.js";

// 📘 Книга
export const bookDtoSchema: ObjectSchema<BookDto> = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    quantity: Joi.number().positive().max(100)
});

export const bookIdSchema = Joi.string().length(26).required();


export const readerSchema = Joi.string().required();

export const pickUpBookSchema = Joi.object({
    id: Joi.string().length(36).required(),
    reader: Joi.string().required()
});

//==============new update==============\\

export const readerAccountSchema = Joi.object({

userName: Joi.string().min(1).max(50).required(),

password: Joi.string().min(8).required(),

email: Joi.string().email().required(),

birthdate: Joi.string().length(10).required(),

roles: Joi.array().items(Joi.string().valid('USER', 'ADMIN', 'LIBRARIAN')).default(['USER'])
});


//export const updatePasswordSchema = Joi.object({

//username: Joi.string().min(1).max(50).required(),

//password: Joi.string().min(8).required()
//});


//export const updateDataSchema = Joi.object({

//username: Joi.string().min(1).max(50).required(),

//email: Joi.string().email().required(),

//birth: Joi.string().length(10).required()
//});
