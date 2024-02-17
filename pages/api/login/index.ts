import { SessionData, sessionOptions } from "@/lib";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req ?? {};

  if (method === "GET") {
    return res.status(400).send("Invalid HTTP method");
  }
  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (data?.message === "Invalid credentials") {
      return res.status(401).json(data);
    }
    session.isLoggedIn = true;
    await session.save();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json(error);
  }
};
export default login;
