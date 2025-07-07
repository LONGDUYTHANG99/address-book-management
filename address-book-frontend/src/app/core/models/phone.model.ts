import { Common } from "./common.model";
import { Contact } from "./contact.model";
import { PhoneType } from "./phone-type.model";

export interface Phone extends Common{
    id?: number;
    number?: string;

    //Navigation properties
    phoneTypeId?: number;
    phoneType?: PhoneType;
    contactId?: number;
    contact?: Contact;
}