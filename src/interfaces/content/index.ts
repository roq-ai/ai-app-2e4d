import { CategoryInterface } from 'interfaces/category';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  organization_id?: string;
  category?: CategoryInterface[];
  organization?: OrganizationInterface;
  _count?: {
    category?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
