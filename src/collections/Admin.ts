import { CollectionConfig } from 'payload/types';

const Admin: CollectionConfig = {
  slug: 'admin',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
    admin: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Admin;