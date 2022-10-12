import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../utilities/collection-helpers';

const Artists: CollectionConfig = {
  slug: 'artists',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin,
    read: ()  => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      label: 'First Name',
      defaultValue: 'Artist Name',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Last Name',
      admin: {
        description: 'Only the first name will be used in the public facing site.',
      }
    },
    {
      name: 'bio',
      type: 'textarea',
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
      name: 'profileImage',
      type: 'upload',
      relationTo: 'profile-images',
      label: 'Profile Image',
      required: true,
    }, 
    {
      name: 'portfolioImagesArray', // required
      type: 'array', // required
      label: 'Portfolio Images',
      minRows: 0,
      maxRows: 16,
      labels: {
        singular: 'Portfolio Image',
        plural: 'Portfolio Images',
      },
      fields: [
      {
        name: 'portfolioImages',
        type: 'upload',
        relationTo: 'portfolio-images',
        label: 'Portfolio Images',
      }
      ]
    }
  ],
};

export default Artists;