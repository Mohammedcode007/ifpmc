'use client';

import React, { useEffect, useState, useTransition } from 'react';
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
const StyledLinkoption = styled(Link)<StyledLinkProps>(({ theme, active }) => ({
    borderBottom: active ? `1px solid ${colors.active}` : 'none',
    color: 'white',
}));

const Navbar: React.FC = () => {
    const t = useTranslations('HomePage');
    const router = useRouter();
    const currentPath = usePathname();
    const [isClient, setIsClient] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [researchAnchorEl, setResearchAnchorEl] = useState<null | HTMLElement>(null);
    const [researchSelected, setResearchSelected] = useState(false);
    const pathAfterSlash = currentPath.split('/')[1];

    const theme = useTheme();
    const isMobileView = useMediaQuery(`(max-width: 1060px)`);

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

    const handleResearchClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setResearchAnchorEl(event.currentTarget);
    };

    const handleResearchClose = () => {
        setResearchAnchorEl(null);
    };

    const handleResearchSelect = () => {
        setResearchSelected(true);
        handleResearchClose();
    };

    const renderLinks = () => (
        <>
            <StyledLink href={`/${pathAfterSlash}`} passHref active={currentPath === `/${pathAfterSlash}`}>
                <Typography variant="body1" component="a" color="inherit">
                    {t('home')}
                </Typography>
            </StyledLink>
            <Box onClick={handleResearchClick} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="a" color={currentPath.includes('/research') ? colors.active : colors.desActive}>
                    Research
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: researchAnchorEl ? colors.active : colors.desActive }} />
            </Box>

            <Menu
                anchorEl={researchAnchorEl}
                open={Boolean(researchAnchorEl)}
                onClose={handleResearchClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#476B87', // Change this to your desired background color
                        borderRadius: 0, // تعيين نصف القطر إلى 0 لجعل الزوايا حادة
                    },
                    '& .MuiMenuItem-root': {
                        color: 'white', // تغيير هذا إلى اللون الأحمر

                        '&:hover': {
                            backgroundColor: '#C99700', // Change this to your desired hover color
                        },
                    },
                }}
                onClick={(e) => e.stopPropagation()} // Prevent the menu from closing the Drawer
            >
                <MenuItem onClick={handleResearchSelect} sx={{ paddingTop: '0px' }}>
                    <StyledLinkoption href={`/${pathAfterSlash}/research/Publications`} passHref active={currentPath === `/${pathAfterSlash}/research/Publications`}>
                        Publications
                    </StyledLinkoption>
                </MenuItem>
                <MenuItem onClick={handleResearchClose} sx={{ paddingBottom: '0px' }}>
                    <StyledLinkoption href={`/${pathAfterSlash}/research/Projects`} passHref active={currentPath === `/${pathAfterSlash}/research/Projects`}>
                        Projects
                    </StyledLinkoption>
                </MenuItem>
            </Menu>
            <StyledLink href={`/${pathAfterSlash}/events`} passHref active={currentPath === `/${pathAfterSlash}/events`}>
                <Typography variant="body1" component="a" color="inherit">
                    Events
                </Typography>
            </StyledLink>
            <StyledLink href={`/${pathAfterSlash}/training`} passHref active={currentPath === `/${pathAfterSlash}/training`}>
                <Typography variant="body1" component="a" color="inherit">
                    Training
                </Typography>
            </StyledLink>
            <StyledLink href={`/${pathAfterSlash}/podcast`} passHref active={currentPath === `/${pathAfterSlash}/podcast`}>
                <Typography variant="body1" component="a" color="inherit">
                    Podcast
                </Typography>
            </StyledLink>
            <StyledLink href="/whoarewe" passHref active={currentPath === '/whoarewe'}>
                <Typography variant="body1" component="a" color="inherit">
                    Who Are We
                </Typography>
            </StyledLink>
            <StyledLink href={`/${pathAfterSlash}/contact`} passHref active={currentPath === `/${pathAfterSlash}/contact`}>
                <Typography variant="body1" component="a" color="inherit">
                    Contact Us
                </Typography>
            </StyledLink>
        </>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: colors.white }} style={{ direction: pathAfterSlash === 'ar' ? 'rtl' : 'ltr' }}>
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
                            onClick={() => setAnchorEl(null)} // Close language menu when drawer is closed
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={() => setAnchorEl(null)} // Close language menu when drawer is clicked
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
                                    sx={{
                                        '& .MuiPaper-root': {
                                            backgroundColor: '#476B87', // Change this to your desired background color
                                            borderRadius: 0, // تعيين نصف القطر إلى 0 لجعل الزوايا حادة
                                        },
                                        '& .MuiMenuItem-root': {
                                            color: 'white', // تغيير هذا إلى اللون الأحمر

                                            '&:hover': {
                                                backgroundColor: '#C99700', // Change this to your desired hover color
                                            },
                                        },
                                    }}
                                    onClick={(e) => e.stopPropagation()} // Prevent the menu from closing the Drawer
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
                                    sx={{
                                        '& .MuiPaper-root': {
                                            backgroundColor: '#476B87', // Change this to your desired background color
                                            borderRadius: 0, // تعيين نصف القطر إلى 0 لجعل الزوايا حادة
                                        },
                                        '& .MuiMenuItem-root': {
                                            color: 'white', // تغيير هذا إلى اللون الأحمر

                                            '&:hover': {
                                                backgroundColor: '#C99700', // Change this to your desired hover color
                                            },
                                        },
                                    }}
                                    onClick={(e) => e.stopPropagation()} // Prevent the menu from closing the Drawer
                                >
                                    <MenuItem onClick={() => onSelectChange('en')}>English</MenuItem>
                                    <MenuItem onClick={() => onSelectChange('ar')}>العربية</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Link href={`/${pathAfterSlash}/search`} passHref>
                            <SearchIconWrapper>
                                <IconButton sx={{ color: anchorEl ? colors.active : colors.desActive }}>
                                    <SearchIcon sx={{ color: anchorEl ? colors.active : colors.desActive }} />
                                </IconButton>
                            </SearchIconWrapper>
                        </Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
