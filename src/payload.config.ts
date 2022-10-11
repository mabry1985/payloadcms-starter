import { buildConfig } from 'payload/config';
import path from 'path';
import Artists from './collections/Artists';
import PortfolioImages from './collections/PortfolioImages';
import ProfileImages from './collections/ProfileImages';
import Media from './collections/Media';
import Admin from './collections/Admin';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Admin.slug,
  },
  collections: [
    Admin,
    Artists,
    PortfolioImages,
    ProfileImages,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
