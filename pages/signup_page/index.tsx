"use client"
import React from 'react'
import { styled, Box, BoxProps } from '@mui/material'
import SignUp from '@/components/Signup/Signup'

const StyledBox = styled(Box)<BoxProps>(() => ({
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}))

const SignupPage = () => (
	<StyledBox>
		<SignUp />
	</StyledBox>
)
export default SignupPage
