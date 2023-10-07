const mapping: Record<string, string> = {
  categories: 'category',
  contents: 'content',
  organizations: 'organization',
  permissions: 'permission',
  roles: 'role',
  tags: 'tag',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
