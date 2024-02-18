import { Typography, styled } from '@mui/material'
import Link from 'next/link'

export const SignupLink = styled(Link)(({ theme }) => ({
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '18px',
	color: "#9E77ED",
	textDecoration: 'none',
	marginLeft: '3px',
}))

export const CreateAccountText = styled(Typography)(() => ({
	fontWeight: 500,
	fontSize: '16px',
	lineHeight: '18px',
	textAlign: 'center',
}))