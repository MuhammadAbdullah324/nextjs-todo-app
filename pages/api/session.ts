import { NextApiRequest, NextApiResponse } from 'next'
import { getIronSession } from 'iron-session'
import { SessionData, defaultSession, sessionOptions } from '../lib'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
	const session = await getIronSession<SessionData>(request, response, sessionOptions)

	if (request.method === 'POST') {
		session.isLoggedIn = true
		await session.save()

		return response.json(session)
	}
	if (request.method === 'GET') {
		if (session.isLoggedIn !== true) {
			return response.json(defaultSession)
		}

		return response.json(session)
	}
	if (request.method === 'DELETE') {
		session.destroy()

		return response.json(defaultSession)
	}

	return response.status(405).end(`Method ${request.method} Not Allowed`)
}
