import { CollectionConfig } from 'payload/types';

const PortfolioImages: CollectionConfig = {
  slug: 'portfolio-images',
  admin: {
    useAsTitle: 'filename',
    group: 'Content'
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/portfolio-images',
    staticDir: 'portfolio-images',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: null,
        position: 'centre',
      },
      {
        name: 'large',
        width: 768,
        height: null,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'artist',
      label: 'Artist Name',
      type: 'relationship',
      relationTo: 'artists',
    },
  ],
};

export default PortfolioImages;