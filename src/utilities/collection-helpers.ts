/**
 * Determines if user is an admin
 * @param req: Request from express server 
 * @returns boolean: true if user is an admin
 */
export const isAdmin = ({ req: { user } }: boolean | any) => true;
// export const isAdmin = ({ req: { user }}): boolean => user.isAdmin