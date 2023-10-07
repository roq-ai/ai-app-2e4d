import queryString from 'query-string';
import { CategoryInterface, CategoryGetQueryInterface } from 'interfaces/category';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCategories = async (
  query?: CategoryGetQueryInterface,
): Promise<PaginatedInterface<CategoryInterface>> => {
  return fetcher('/api/categories', {}, query);
};

export const createCategory = async (category: CategoryInterface) => {
  return fetcher('/api/categories', { method: 'POST', body: JSON.stringify(category) });
};

export const updateCategoryById = async (id: string, category: CategoryInterface) => {
  return fetcher(`/api/categories/${id}`, { method: 'PUT', body: JSON.stringify(category) });
};

export const getCategoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/categories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCategoryById = async (id: string) => {
  return fetcher(`/api/categories/${id}`, { method: 'DELETE' });
};
