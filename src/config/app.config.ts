interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Editor', 'Member'],
  tenantName: 'Organization',
  applicationName: 'Ai App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read content', 'Read categories', 'Read tags', 'Read organizations'],
  ownerAbilities: [
    'Manage permissions',
    'Manage roles',
    'Manage tags',
    'Manage categories',
    'Manage content',
    'Manage users',
    'Manage organizations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/35619dc7-898b-41d3-a783-21bd14015b36',
};
