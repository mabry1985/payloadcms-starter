import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../utilities/collection-helpers';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const ProfileImages: CollectionConfig = {
  slug: 'profile-images',
  admin: {
    useAsTitle: 'filename',
    group: 'Content',
  },
  access: {
    read: () => true,
    create: isAdmin
  },
  upload: {
    staticURL: '/profile-images',
    staticDir: 'profile-images',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'centre',
      },
      {
        name: 'large',
        width: 768,
        height: 768,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*.jpeg, image/*.jpg, image/*.png'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    }
  ],
}

export default ProfileImages;