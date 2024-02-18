"use client"
import React from 'react'
import { styled, Box, BoxProps } from '@mui/material'
import SignUp from '@/components/signup/Signup'

const StyledBox = styled(Box)<BoxProps>(() => ({
	height: '80vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'start',
}))

const SignupPage = () => (
	<StyledBox>
		<SignUp />
	</StyledBox>
)
export default SignupPage
