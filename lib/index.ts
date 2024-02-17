import { SessionOptions } from 'iron-session'

export interface SessionData {
	isLoggedIn: boolean
}

export const defaultSession: SessionData = {
	isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
	password: 'complex_password_at_least_32_characters_long',
	cookieName: 'login_cookie',
	cookieOptions: {
		// secure only works in `https` environments
		secure: process.env.NODE_ENV === 'production',
		// secure: true,
	},
}
