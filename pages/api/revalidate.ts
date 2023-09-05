// http://localhost:3000/api/revalidate?path=/&secret=4667a66e6958ddfffa337c4677a056c9

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token " });
  }

  try {
    await res.revalidate("/");
    await res.revalidate("/projects");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
