import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const ProfileImages: CollectionConfig = {
  slug: 'profile-images',
  admin: {
    useAsTitle: 'filename',
    group: 'Content',
  },
  access: {
    read: () => true,
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
      // {
      //   name: 'tablet',
      //   width: 1024,
      //   // By specifying `null` or leaving a height undefined,
      //   // the image will be sized to a certain width,
      //   // but it will retain its original aspect ratio
      //   // and calculate a height automatically.
      //   height: null,
      //   position: 'centre',
      // },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'artist-name',
      type: 'relationship',
      relationTo: 'artists',
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    }
  ],
}

export default ProfileImages;