import {IUser} from './user'

export class Vendor implements IUser{
    id: number;    name: string;
    address: any;
    email: string;
    password: string;
    contact: import('./contact').Contact;
    verificationStatus: boolean = false;
}
