/* eslint-disable react/no-unescaped-entities */
import { FormControl, useTheme, Box, TextField, FormLabel, SnackbarOrigin, Snackbar } from '@mui/material'
import { CreateAccountText, SignupLink } from './LoginStyles'
import Heading from '../GlobalComponents/Heading'
import { SignInButton } from '../CustomButtons/CustomButtons'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

interface SnackbarOriginState extends SnackbarOrigin {
	open: boolean
}

const Login = () => {
	const theme = useTheme()
	const [loginMessage, setLoginMessage] = useState('')
	const router = useRouter()
	const [state, setState] = useState<SnackbarOriginState>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	})

	const { vertical, horizontal, open } = state

	const handleClose = () => {
		setState({ ...state, open: false })
	}
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			const data = await response.json()
			
		
			if (!response.ok) {
				setLoginMessage(data.message)
				setState({ ...state, open: true })

				throw new Error(data.message)
			}
		localStorage.setItem('userToken', data?.token);


			router.push('/todo-list')
		} catch (error) {
			// bail out error
		}
	}
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget

		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<Box sx={{ textAlign: 'left' }}>
			<Heading text="Login to your account" />
			
			<Box component='form' onSubmit={handleSubmit} noValidate>
				<FormControl>
					<FormLabel htmlFor='email'>Username</FormLabel>
					<TextField
						sx={{ width: '368px', mb: '20px',mt:'5px' }}
						type='text'
						id='username'
						name='username'
						placeholder="Enter your username"
						onChange={handleInputChange}
					/>
					<FormLabel htmlFor='password'>Password</FormLabel>
					<TextField
						sx={{ width: '368px', mb: '20px' ,mt:'5px' }}
						type='password'
						id='password'
						name='password'
						placeholder="Enter your password"
						onChange={handleInputChange}
					/>
					<SignInButton disableRipple disabled={formData.username === '' || formData.password === ''} type='submit'>
						Log In
					</SignInButton>
					<CreateAccountText color={theme.palette.text.primary}>
						Don't have an account?
						<SignupLink href='/signup_page'>Sign up</SignupLink>
					</CreateAccountText>
				</FormControl>
			</Box>
			<Snackbar
				autoHideDuration={5000}
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				message={loginMessage}
				sx={{ textAlign: 'center' }}
				key={vertical + horizontal}
			/>
		</Box>
	)
}

export default Login
