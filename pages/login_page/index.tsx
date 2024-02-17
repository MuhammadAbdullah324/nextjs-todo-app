'use client'
import React from 'react'
import { styled, Box, BoxProps } from '@mui/material'
import Login from '@/components/Login/Login'

const StyledBox = styled(Box)<BoxProps>(() => ({
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}))

const LoginPage = () => {
	return (
		<StyledBox>
			<Login />
		</StyledBox>
	)
}
export default LoginPage
