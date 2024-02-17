"use client"
import Login from '@/components/Login/Login'
import { styled, Box, BoxProps } from '@mui/material'

export default function Home() {
	const StyledBox = styled(Box)<BoxProps>(() => ({
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}))
	return (
		<StyledBox>
			<Login />
		</StyledBox>
	)
}
