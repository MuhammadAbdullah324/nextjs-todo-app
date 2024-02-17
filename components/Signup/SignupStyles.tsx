import { Typography } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

export const SignupContainer = styled(Box)<BoxProps>(() => ({
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '10px',
}))

export const StepLabels = styled(Box)<BoxProps>(() => ({
	display: 'flex',
	justifyContent: 'space-around',
	width: '100%',
	order: '1',
}))

export const AlreadyAccountText = styled(Typography)(() => ({
	fontWeight: 500,
	fontSize: '16px',
	lineHeight: '18px',
	textAlign: 'center',
}))

export const LoginLink = styled(Link)(({ theme }) => ({
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '18px',
	color: "#9E77ED",
	textDecoration: 'none',
	marginLeft: '3px',
}))
