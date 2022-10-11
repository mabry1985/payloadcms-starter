import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../utilities/collection-helpers';

const User: CollectionConfig = {
  slug: 'user',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'isAdmin',
      type: 'checkbox',
    }
  ],
};

export default User;