import { Website } from "./website.model";

export interface WebsiteType {
    id?: number,
    name?: string,

    //Navigation properties
    websites?: Website[]
}