import {Box, styled} from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import {Span} from './Typography';
import logo from '../assets/highscope.label-removebg-preview.png'
import {LogoHighscope} from "app/components";

const BrandRoot = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 18px 10px 18px',
    backgroundColor: "#F6B333",
}));

const StyledSpan = styled(Span)(({mode}) => ({
    fontSize: 8,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({children}) => {
    const {settings} = useSettings();
    const leftSidebar = settings.layout1Settings.leftSidebar;
    const {mode} = leftSidebar;

    return (
        <BrandRoot>
            <Box display="flex" alignItems="center">
                <LogoHighscope/>
                <StyledSpan mode={mode} className="sidenavHoverShow">
                    <img src={logo} loading="lazy" width="80%" style={{
                        marginTop: '8px',
                        marginLeft: '-10px'
                    }}/>
                </StyledSpan>
            </Box>

            {/*<Box className="sidenavHoverShow" sx={{display: mode === 'compact' ? 'none' : 'block'}}>*/}
            {/*    {children || null}*/}
            {/*</Box>*/}
        </BrandRoot>
    );
};

export default Brand;
