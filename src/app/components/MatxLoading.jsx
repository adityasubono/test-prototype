import {CircularProgress, LinearProgress, Stack} from '@mui/material';
import { Box, styled } from '@mui/system';
import highscopeLogo from '../assets/highscope/HighScopeLogo.png'

const StyledLoading = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: 'auto',
    height: '55px',
  },
  '& .circleProgress': {
    position: 'absolute',
    left: -7,
    right: 0,
    top: 'calc(50% - 1000px)',
  },
}));

const Loading = () => {
  return (
    <StyledLoading>
      <Box position="relative">
        <img src={highscopeLogo} alt="" />
        <CircularProgress className="circleProgress" />
      </Box>
    </StyledLoading>
  );
};

export default Loading;
