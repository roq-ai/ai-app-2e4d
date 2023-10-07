import queryString from 'query-string';
import { PermissionInterface, PermissionGetQueryInterface } from 'interfaces/permission';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPermissions = async (
  query?: PermissionGetQueryInterface,
): Promise<PaginatedInterface<PermissionInterface>> => {
  return fetcher('/api/permissions', {}, query);
};

export const createPermission = async (permission: PermissionInterface) => {
  return fetcher('/api/permissions', { method: 'POST', body: JSON.stringify(permission) });
};

export const updatePermissionById = async (id: string, permission: PermissionInterface) => {
  return fetcher(`/api/permissions/${id}`, { method: 'PUT', body: JSON.stringify(permission) });
};

export const getPermissionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/permissions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePermissionById = async (id: string) => {
  return fetcher(`/api/permissions/${id}`, { method: 'DELETE' });
};
