import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../utilities/collection-helpers';

const PortfolioImages: CollectionConfig = {
  slug: 'portfolio-images',
  admin: {
    useAsTitle: 'filename',
    group: 'Content'
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  upload: {
    staticURL: '/portfolio-images',
    staticDir: 'portfolio-images',
    imageSizes: [
      {
        name: 'small',
        width: 375,
        height: 375,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 768,
        height: 768,
        position: 'centre',
      },
      {
        name: 'large',
        width: 1024,
        height: 1024,
        position: 'centre',
      },
    ],
    adminThumbnail: 'small',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default PortfolioImages;