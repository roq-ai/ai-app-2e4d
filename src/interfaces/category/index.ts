import { TagInterface } from 'interfaces/tag';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  content_id?: string;
  tag?: TagInterface[];
  content?: ContentInterface;
  _count?: {
    tag?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_id?: string;
}
