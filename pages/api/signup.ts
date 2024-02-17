import { NextApiRequest, NextApiResponse } from 'next'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, body } = req ?? {}

	if (method === 'GET') {
		return res.status(400).send('Invalid HTTP method')
	}

	try {
		const response = await fetch('', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})

		const data = await response.json()

		if (data.statusCode === 401) {
			return res.status(401).json(data)
		}
		return res.status(200).json(data)
	} catch (error) {
		return res.status(401).json(error)
	}
}

export default signup
