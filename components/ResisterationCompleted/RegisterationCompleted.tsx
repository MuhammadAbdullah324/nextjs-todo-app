import Image from 'next/image'
import Link from 'next/link'
import { styled, Box, BoxProps } from '@mui/material'

import Heading from '../GlobalComponents/Heading'
import SubHeading from '../GlobalComponents/SubHeading'

const RegisterationCompleted = () => {

	const StyledLink = styled(Link)(({ theme }) => ({
		width: '368px',
		padding: '10px',
		color: 'white',
		background: theme.palette.secondary.main,
		border: 'none',
		borderRadius: '8px',
		margin: '20px 0 10px 0',
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '18px',
		textDecoration: 'none',
		cursor: 'pointer',
	}))

	const StyledBox = styled(Box)<BoxProps>(() => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '400px',
		textAlign: 'center',
		'& img': {
			marginBottom: '40px',
		},
	}))

	return (
		<StyledBox>
			<Image
				alt='Image of registeration complete icon'
				src='/assets/registerationCompletedIcon.svg'
				width={104}
				height={100}
			/>
			<Heading text="Registeration Completed" />
			<SubHeading text="You can now login to your account ,click below link" />

			<StyledLink href='/login_page'>Login</StyledLink>
		</StyledBox>
	)
}

export default RegisterationCompleted
