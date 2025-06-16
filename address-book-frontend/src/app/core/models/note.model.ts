import { Contact } from "./contact.model"

export interface Note {
    id?: number,
    title?: string,
    content?: string

    //Navigation properties
    contactId?: number,
    contact?: Contact
}