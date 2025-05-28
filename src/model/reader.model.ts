/*import mongoose, {Schema, Document} from 'mongoose';

import {Role} from '../types/role.enum.js';

export interface ReaderDocument extends Document{



readerId: string;

passHash: string;

email: string;

birthdate: string;

roles: Role[];
}



const ReaderSchema = new Schema<ReaderDocument>({

readerId: {type: String, required: true, unique: true},

passHash: {type: String, required: true},

email: {type: String, required: true},

birthdate: {type: String, required: true},

roles:{


type: [String],

enum: Object.values(Role),

default: [Role.USER],},
});

export const ReaderModel =
mongoose.model<ReaderDocument>('Reader', ReaderSchema);*/
