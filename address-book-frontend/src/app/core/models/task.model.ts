import { Contact } from "./contact.model";

export interface Task {
    id?: number,
    title?: string,
    type?: number,
    dueDate?: Date,
    note?: string,

    //Navigation properties
    contactId?: number,
    contact?: Contact
}