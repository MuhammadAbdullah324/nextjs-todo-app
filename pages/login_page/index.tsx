'use client'
import React from 'react'
import { styled, Box, BoxProps } from '@mui/material'
import Login from '@/components/login'

const StyledBox = styled(Box)<BoxProps>(() => ({
	height: '80vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'start',
}))

const LoginPage = () => {
	return (
		<StyledBox>
			<Login />
		</StyledBox>
	)
}
export default LoginPage
