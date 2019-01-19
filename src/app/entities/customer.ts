import {IUser} from './user';

export class Customer implements IUser {
    id: number;    name: string;
    address: any;
    email: string;
    password: string;
    contact: number;

}
