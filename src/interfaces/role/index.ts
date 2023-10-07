import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  role_description: string;
  role_descriptiong?: string;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  role_description?: string;
  role_descriptiong?: string;
}
