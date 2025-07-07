import { Common } from "./common.model";
import { Contact } from "./contact.model";
import { WebsiteType } from "./website-type.model";

export interface Website extends Common{
    id?: number,
    url?: string,
    
    //Navigation properties
    contactId?: number,
    contact?: Contact
    websiteTypeId?: number,
    websiteType?: WebsiteType

}