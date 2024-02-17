import { Typography, styled } from '@mui/material'

interface IHeadingProps {
	text: string
}
const StyledHeading = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontWeight: 400,
	fontSize: '28px',
	lineHeight: '34px',
	marginBottom: '10px',
}))

const Heading = ({ text }: IHeadingProps) => <StyledHeading>{text}</StyledHeading>

export default Heading
