import {Role} from '../types/role.enum.js';

export type Reader = {

readerId: string;

passHash: string;

email: string;

birthdate: string;

roles: Role[];
};