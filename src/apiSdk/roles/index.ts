import queryString from 'query-string';
import { RoleInterface, RoleGetQueryInterface } from 'interfaces/role';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRoles = async (query?: RoleGetQueryInterface): Promise<PaginatedInterface<RoleInterface>> => {
  return fetcher('/api/roles', {}, query);
};

export const createRole = async (role: RoleInterface) => {
  return fetcher('/api/roles', { method: 'POST', body: JSON.stringify(role) });
};

export const updateRoleById = async (id: string, role: RoleInterface) => {
  return fetcher(`/api/roles/${id}`, { method: 'PUT', body: JSON.stringify(role) });
};

export const getRoleById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/roles/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRoleById = async (id: string) => {
  return fetcher(`/api/roles/${id}`, { method: 'DELETE' });
};
