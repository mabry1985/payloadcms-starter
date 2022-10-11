import { CollectionConfig } from 'payload/types';

const PortfolioImages: CollectionConfig = {
  slug: 'portfolio-images',
  admin: {
    useAsTitle: 'filename',
    group: 'Content'
  },
  access: {
    read: () => true,
    create:  ({ req: { user }, data} ) => {
      console.log(data);
      
      if (!user) return false;
      return true;
    },
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
    mimeTypes: ['image/*.jpeg', 'image/*.jpg', 'image/*.png'],
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