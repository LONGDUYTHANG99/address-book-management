import { Common } from "./common.model";
import { Note } from "./note.model";
import { Organization } from "./organization.model";
import { Phone } from "./phone.model";
import { Task } from "./task.model";
import { Website } from "./website.model";

export interface Contact extends Common{
  id?: number;
  image?: string;
  firstName?: string;
  lastName?: string;
  nickName?: string;
  jobTitle?: string;
  personalEmail?: string;
  workEmail?: string;
  birthday?: Date;
  homeAdress?: string;
  workAdress?: string
  
  //Master data
  gender?: number;
  relationship?: number;
  department?: number;
  group?: number;

  //Navigation properties
  phones?: Phone[];
  websites?: Website[];
  organizationId?: number;
  organization?: Organization
  tasks?: Task[];
  notes?: Note[];

  //More feature
  isFavourite?: boolean
}
