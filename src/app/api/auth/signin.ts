// import { NextApiRequest, NextApiResponse } from 'next';
// import { getSession, signOut } from 'next-auth/react';
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const session = await getSession({ req });
//
//     if (session) {
//         await signOut({ redirect: false, callbackUrl: '/' });
//         res.status(200).json({ message: 'Logged out successfully' });
//     } else {
//         res.status(401).json({ message: 'Not authenticated' });
//     }
// }