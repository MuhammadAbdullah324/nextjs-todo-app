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

export const StyledCheckbox = styled('input')(({ theme }) => ({
	width: '18px',
	height: '18px',
	border: `1px solid ${theme.palette.grey[500]}`,
	marginRight: '10px',
}))
