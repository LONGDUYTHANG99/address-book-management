import { Organization } from "./organization.model";
import { Phone } from "./phone.model";

export interface Contact {
  id?: number;
  image?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  personalEmail?: string;
  workEmail?: string;
  birthday?: string;
  gender?: number;
  phones?: Phone[];
  organizationId?: number;
  organization?: Organization
}
