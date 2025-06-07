import { Contact } from "./contact.model";

export interface Organization {
    id?: number;
    name?: string;
    email?: string
    phone?: string;
    website?: string;
    country?: number;
    industry?: number;
    type?: number;
    contacts?: Contact[];
}