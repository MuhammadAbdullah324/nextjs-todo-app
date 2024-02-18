/* eslint-disable no-nested-ternary */

import { Box, FormControl, TextField, Typography, FormLabel } from '@mui/material'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { styled } from '@mui/material/styles'


import { AlreadyAccountText, LoginLink, SignupContainer, StepLabels, } from '../signup/SignupStyles'

import { BackButton, ContinueButton } from '../customButtons/CustomButtons'
import RegisterationCompleted from '../registerationCompleted'

const QontoConnector = styled(StepConnector)(() => ({
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: '#9E77ED',
		},
	},

	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: '#52C41A',
		},
	},

	[`& .${stepConnectorClasses.line}`]: {
		width: 179,
		height: 4,
		backgroundColor: '#E5E9EC',
		border: 'none',
		borderRadius: 2,
	},
}))

const SignUp = () => {
	const [activeStep, setActiveStep] = React.useState(1)

	const steps = ['Step 1', 'Step 2', '']

	const [formdata, setFormData] = useState({
		fullname: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget

		setFormData({
			...formdata,
			[name]: value,
		})
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	return (
		<SignupContainer>
			{activeStep !== 3 && (
				<>
					<Stepper activeStep={activeStep} connector={<QontoConnector />} style={{ order: 2 }}>
						{steps.map((label) => (
							<Step key={label} />
						))}
					</Stepper>
					<StepLabels>
						<Typography fontWeight='bold' fontSize='12'>
							STEP 1
						</Typography>
						<Typography fontWeight='bold' fontSize='12' sx={{ visibility: activeStep > 1 ? 'visible' : 'hidden' }}>
							STEP 2
						</Typography>
					</StepLabels>
				</>
			)}

			<Box order={3}>
				{activeStep !== 3 && (
					<Box mt={4}>
							<Typography sx={{fontSize:'30px',mb:'10px'}} >Create new account</Typography>
					</Box>
				)}
				<Box component='form' onSubmit={handleSubmit}>
					{activeStep === 1 ? (
						<FormControl>
							<FormLabel htmlFor='fullname'>Full Name</FormLabel>
							<TextField
								sx={{ width: '368px', mb: '20px', mt: '5px' }}
								type='text'
								id='fullname'
								name='fullname'
								placeholder='enter your full name'
								value={formdata.fullname}
								onChange={handleFormChange}
							/>
							<FormLabel htmlFor='email'>Email</FormLabel>
							<TextField
								sx={{ width: '368px', mb: '20px', mt: '5px' }}
								type='email'
								id='email'
								name='email'
								placeholder='Enter your email'
								value={formdata.email}
								onChange={handleFormChange}
							/>
							<ContinueButton onClick={handleNext} type='button'>
								Continue
							</ContinueButton>
							<AlreadyAccountText>
								Already have an account?
								<LoginLink href='/login_page'>Login</LoginLink>
							</AlreadyAccountText>
						</FormControl>
					) : activeStep === 2 ? (
						<FormControl>
							<FormLabel htmlFor='password'>Password</FormLabel>
							<TextField
								type='password'
								id='password'
								name='password'
								placeholder='Enter your password'
								value={formdata.password}
								onChange={handleFormChange}
								sx={{ width: '368px', mb: '20px', mt: '5px' }}
							/>

							<FormLabel htmlFor='confirmPassword'>Confirm password</FormLabel>
							<TextField
								type='password'
								id='confirmPassword'
								name='confirmPassword'
								placeholder='Enter confirm password'
								value={formdata.confirmPassword}
								onChange={handleFormChange}
								sx={{ width: '368px', mb: '20px', mt: '5px' }}
							/>
							<ContinueButton
								disableRipple
								disabled={formdata.password !== formdata.confirmPassword || formdata.password===''}
								onClick={handleNext}
								type='button'
							>
								Continue
							</ContinueButton>
							<BackButton onClick={handleBack} type='button'>
								Back
							</BackButton>
						</FormControl>
					) : (
						<RegisterationCompleted />
					)}
				</Box>
			</Box>
		</SignupContainer>
	)
}

export default SignUp
