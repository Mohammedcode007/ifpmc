'use client';

import React, { useEffect, useState, ChangeEvent, useTransition } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Box, Menu, MenuItem, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import MyAppLogo from '../assets/images/logo.png'; // Adjust the path accordingly
import Image from 'next/image';
import { colors } from '../utils/colors';
import { useTranslations } from 'next-intl';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

interface StyledLinkProps {
    active: boolean;
}


const StyledLink = styled(Link)<StyledLinkProps>(({ theme, active }) => ({
    borderBottom: active ? `1px solid ${colors.active}` : 'none',
    color: active ? colors.active : colors.desActive,
}));

const Navbar: React.FC = () => {
    const t = useTranslations('HomePage');
    const router = useRouter();
    const currentPath = usePathname();
    const [isClient, setIsClient] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
const pathAfterSlash = currentPath.split('/')[1];


    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
   
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
  
    const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const onSelectChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(`/${newLocale}`);
        });
        handleLanguageClose();
    };

    const renderLinks = () => (
        <>
            <StyledLink href={`/`} passHref active={currentPath === `/`}>
                <Typography variant="body1" component="a" color="inherit">
                    {t('home')}
                </Typography>
            </StyledLink>
            <StyledLink href={`/${pathAfterSlash}/research`} passHref active={currentPath === `/${pathAfterSlash}/research`}>
                <Typography variant="body1" component="a" color="inherit">
                    Research
                </Typography>
            </StyledLink>
            <StyledLink href="/events" passHref active={currentPath === '/events'}>
                <Typography variant="body1" component="a" color="inherit">
                    Events
                </Typography>
            </StyledLink>
            <StyledLink href="/training" passHref active={currentPath === '/training'}>
                <Typography variant="body1" component="a" color="inherit">
                    Training
                </Typography>
            </StyledLink>
            <StyledLink href="/podcast" passHref active={currentPath === '/podcast'}>
                <Typography variant="body1" component="a" color="inherit">
                    Podcast
                </Typography>
            </StyledLink>
            <StyledLink href="/whoarewe" passHref active={currentPath === '/whoarewe'}>
                <Typography variant="body1" component="a" color="inherit">
                    Who Are We
                </Typography>
            </StyledLink>
            <StyledLink href="/contactus" passHref active={currentPath === '/contactus'}>
                <Typography variant="body1" component="a" color="inherit">
                    Contact Us
                </Typography>
            </StyledLink>
        </>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: colors.white }} style={{direction: pathAfterSlash === 'ar' ? "rtl" :'ltr'}}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <Image
                        src={MyAppLogo}
                        alt="Logo"
                        width={243}
                        height={52}
                    />
                </Typography>
                {isMobileView ? (
                    <>
                        <IconButton
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {renderLinks().props.children.map((link: React.ReactNode, index: number) => (
                                        <ListItem button key={index}>
                                            <ListItemText primary={link} />
                                        </ListItem>
                                    ))}
                                    <ListItem button onClick={handleLanguageClick}>
                                        <ListItemText primary="Language" />
                                        <KeyboardArrowDownIcon />
                                    </ListItem>
                                </List>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleLanguageClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={() => onSelectChange('en')}>English</MenuItem>
                                    <MenuItem onClick={() => onSelectChange('ar')}>العربية</MenuItem>
                                </Menu>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {renderLinks()}
                            <div
                                onClick={handleLanguageClick}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    borderLeft: `1px solid ${colors.desActive}`,
                                    borderRight: `1px solid ${colors.desActive}`,
                                    paddingLeft: '8px',
                                    paddingRight: '8px',
                                    position: 'relative',
                                }}
                            >
                                <Typography variant="body1" component="a" color="inherit" sx={{ pr: 1, color: anchorEl ? colors.active : colors.desActive }}>
                                    EN
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ color: anchorEl ? colors.active : colors.desActive }} />
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleLanguageClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={() => onSelectChange('en')}>English</MenuItem>
                                    <MenuItem onClick={() => onSelectChange('ar')}>العربية</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <SearchIconWrapper>
                            <IconButton sx={{ color: anchorEl ? colors.active : colors.desActive }}>
                                <SearchIcon sx={{ color: anchorEl ? colors.active : colors.desActive }} />
                            </IconButton>
                        </SearchIconWrapper>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
