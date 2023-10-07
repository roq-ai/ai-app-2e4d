import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface TagInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  tag_description?: string;
  category_id?: string;

  category?: CategoryInterface;
  _count?: {};
}

export interface TagGetQueryInterface extends GetQueryInterface {
  id?: string;
  tag_description?: string;
  category_id?: string;
}
