import { GetQueryInterface } from 'interfaces';

export interface PermissionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  permission_description?: string;

  _count?: {};
}

export interface PermissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  permission_description?: string;
}
