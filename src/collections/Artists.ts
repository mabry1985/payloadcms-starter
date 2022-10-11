import { CollectionConfig } from 'payload/types';

const Artists: CollectionConfig = {
  slug: 'artists',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
      required: true,
      label: 'Artist Bio',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram Username',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Artist Website',
    },
    {
      name: 'profile-image',
      type: 'upload',
      relationTo: 'profile-images',
      label: 'Profile Image',
      required: true,
    }
  ],
};

export default Artists;