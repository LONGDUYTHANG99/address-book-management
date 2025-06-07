import { Contact } from "./contact.model";
import { PhoneType } from "./phone-type.model";

export interface Phone {
    id?: number;
    number?: string;
    phoneTypeId?: number;
    phoneType?: PhoneType;
    contactId?: number;
    contact?: Contact;
}