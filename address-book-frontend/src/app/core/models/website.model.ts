import { Contact } from "./contact.model";
import { WebsiteType } from "./website-type.model";

export interface Website {
    id?: number,
    url?: string,
    
    //Navigation properties
    contactId?: number,
    contact?: Contact
    websiteTypeId?: number,
    websiteType?: WebsiteType

}