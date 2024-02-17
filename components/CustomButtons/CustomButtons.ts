import { Button, ButtonProps, styled } from '@mui/material'

export const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.error.main,
	width: '140px',
	backgroundColor: theme.palette.background.default,
	border: `1px solid ${theme.palette.grey[500]}`,
	padding: '5px 10px',
	textTransform: 'none',
}))

export const CompleteButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.text.secondary,
	width: '176px',
	backgroundColor: theme.palette.grey[500],
	border: `1px solid ${theme.palette.grey[500]}`,
	padding: '5px 10px',
	textTransform: 'none',
	':hover': {
		backgroundColor: 'none',
	},
}))

export const SignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: 'white',
	width: '368px',
	backgroundColor: '#9E77ED',
	border: 'none',
	padding: '10px',
	margin: '20px 0',
	fontSize: '14px',
	fontWeight: ' 500',
	lineHeight: '18px',
	textTransform: 'none',
	':hover': {
		backgroundColor: "#9E77ED",
	},
	':disabled': {
		color: theme.palette.text.primary,
		background: "#dfbdf2",
	},
}))

export const ContinueButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: 'white',
	width: '368px',
	backgroundColor: "#9E77ED",
	border: `1px solid ${theme.palette.grey[200]}`,
	padding: '10px',
	margin: '15px 0',
	fontSize: '14px',
	fontWeight: ' 500',
	lineHeight: '18px',
	textTransform: 'none',
	':hover': {
		backgroundColor: "#9E77ED",
	},
	':disabled': {
		color: theme.palette.text.primary,
		background: "#dfbdf2",
	},
}))

export const BackButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.text.secondary,
	width: '368px',
	background: '#c3c0c4',
	border: `1px solid ${theme.palette.grey[200]}`,
	padding: '10px',
	fontSize: '14px',
	fontWeight: ' 500',
	lineHeight: '18px',
	textTransform: 'none',
	':hover': {
		background: theme.palette.background.default,
	},
}))
