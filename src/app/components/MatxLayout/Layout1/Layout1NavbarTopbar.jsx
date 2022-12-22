import {Avatar, ButtonBase, Hidden, Icon, IconButton, MenuItem, useMediaQuery} from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { MatxMenu, MatxSearchBox } from 'app/components';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
import { NotificationProvider } from 'app/contexts/NotificationContext';
import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import {topBarHeight, topBarNavbarHeight} from 'app/utils/constant';
import React, {Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Span } from '../../Typography';
import NotificationBar from '../../NotificationBar/NotificationBar';
import ShoppingCart from '../../ShoppingCart';
import MatxVerticalNavExpansionPanel from "../../MatxVerticalNav/MatxVerticalNavExpansionPanel";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 96,
    backgroundColor: '#F5F5F5',
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarNavbarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#F5F5F5',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}));

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': { margin: '0 8px' },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': { marginRight: '10px', color: theme.palette.text.primary },
}));

const IconBox = styled('div')(({ theme }) => ({
    display: 'inherit',
    [theme.breakpoints.down('md')]: { display: 'none !important' },
}));

const Layout1NavbarTopbar = () => {
    const theme = useTheme();
    const { settings, updateSettings } = useSettings();
    const { logout, user } = useAuth();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: { leftSidebar: { ...sidebarSettings } },
        });
    };

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings;
        let mode;
        if (isMdScreen) {
            mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
        } else {
            mode = layout1Settings.leftSidebar.mode === 'full' ? 'compact' : 'full';
        }
        updateSidebarMode({ mode });
    };

    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <MatxMenu
                        menuButton={
                            <UserMenu xsDown>
                                <Hidden xsDown>
                                    <Span>
                                        <strong>Admission</strong>
                                    </Span>

                                    <Span>
                                        <strong>E-Library</strong>
                                    </Span>

                                    <Span>
                                        <strong>Material Production</strong>
                                    </Span>

                                    <Span>
                                        <strong>Finance & Genaral Affair</strong>
                                    </Span>

                                    <Span>
                                        <strong>School Management</strong>
                                    </Span>

                                    <Span>
                                        <strong>Student</strong>
                                    </Span>

                                    <Span>
                                        <strong>Parents</strong>
                                    </Span>

                                    <Span>
                                        <strong>Alumni</strong>
                                    </Span>

                                    <Span>
                                        <strong>Reporting</strong>
                                    </Span>



                                </Hidden>
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <Link to="/">
                                <Icon> home </Icon>
                                <Span> Home </Span>
                            </Link>
                        </StyledItem>

                        <StyledItem>
                            <Link to="/page-layouts/user-profile">
                                <Icon> person </Icon>
                                <Span> Profile </Span>
                            </Link>
                        </StyledItem>

                        <StyledItem onClick={logout}>
                            <Icon> power_settings_new </Icon>
                            <Span> Logout </Span>
                        </StyledItem>
                    </MatxMenu>
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    )
};

export default React.memo(Layout1NavbarTopbar);
