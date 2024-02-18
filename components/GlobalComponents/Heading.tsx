import { Spa } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

interface IHeadingProps {
  text: string;
}
const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "32px",
  lineHeight: "34px",
  marginBottom: "10px",
}));
const StyledSpan = styled(Typography)(() => ({
  color: '#333439',
  fontWeight: 'bold',
  fontSize: "35px",
  lineHeight: "34px",
  marginBottom: "10px",
}));

const Heading = ({ text }: IHeadingProps) => {
  return (
    <Box display='flex' gap={'10px'}>
      <StyledHeading >Welcome back</StyledHeading>
      <StyledSpan>{text}</StyledSpan>
    </Box>
  );
};

export default Heading;
