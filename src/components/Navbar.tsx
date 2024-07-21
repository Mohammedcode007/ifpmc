'use client';

import React, { useEffect, useState, useTransition } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Box, Menu, MenuItem, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import MyAppLogo from '../assets/images/logo.png'; // Adjust the path accordingly
import Image from 'next/image';
import { colors } from '../utils/colors';
import { useTranslations } from 'next-intl';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { updatePath } from '@/lib/features/pathSlice';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: 1,
        display: 'none', // Hide by default
        [theme.breakpoints.up('lg')]: {
            display: 'block', // Show on larger screens
        },
    },
    searchIconWrapper: {
        padding: '0 16px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
    activeLink: {
        borderBottom: `1px solid #C99700`, // Active color
    },
    desActiveLink: {
        color: '#a3a3a3', // Inactive color
    },
    menuPaper: {
        backgroundColor: '#476B87',
        borderRadius: '0',
    },
    menuItem: {
        color: 'white',
    },
    menuItemHover: {
        '&:hover': {
            backgroundColor: '#C99700',
        },
    },
    drawerWrapper: {
        width: 250,
    },
    languageMenu: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderLeft: '1px solid #a3a3a3',
        borderRight: '1px solid #a3a3a3',
        padding: '0 8px',
        position: 'relative',
    },
    languageText: {
        paddingRight: '8px',
    },
    fontFamily: {
        fontFamily: 'Almarai, sans-serif',
    },
}));

const Navbar: React.FC = () => {
    const classes = useStyles();
    const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
    const dispatch = useAppDispatch();
    const t = useTranslations('NavBar');
    const router = useRouter();
    const currentPath = usePathname();
    const [isClient, setIsClient] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [researchAnchorEl, setResearchAnchorEl] = useState<null | HTMLElement>(null);
    const [researchSelected, setResearchSelected] = useState(false);

    useEffect(() => {
        dispatch(updatePath(currentPath));
    }, [currentPath, dispatch]);

    const theme = useTheme();
    const isMobileView = useMediaQuery('(max-width: 1060px)');

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
            <Link href={`/${pathAfterSlash}`} passHref className={classes.link}>
                <Typography variant="body1" component="a" className={currentPath === `/${pathAfterSlash}` ? classes.activeLink : classes.desActiveLink}>
                    {t('home')}
                </Typography>
            </Link>
            <Box onClick={handleResearchClick} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="a" className={currentPath.includes('/research') ? classes.activeLink : classes.desActiveLink}>
                    {t('research')}
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
                classes={{ paper: classes.menuPaper }}
                onClick={(e) => e.stopPropagation()} // Prevent the menu from closing the Drawer
            >
                <MenuItem className={classes.menuItem} onClick={handleResearchSelect} sx={{ paddingTop: '0px' }}>
                    <Link href={`/${pathAfterSlash}/research/Publications`} passHref className={classes.link}>
                        Publications
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleResearchClose} sx={{ paddingBottom: '0px' }}>
                    <Link href={`/${pathAfterSlash}/research/Projects`} passHref className={classes.link}>
                        Projects
                    </Link>
                </MenuItem>
            </Menu>
            <Link href={`/${pathAfterSlash}/events`} passHref className={classes.link}>
                <Typography variant="body1" component="a" className={currentPath === `/${pathAfterSlash}/events` ? classes.activeLink : classes.desActiveLink}>
                    {t('events')}
                </Typography>
            </Link>
            <Link href={`/${pathAfterSlash}/training`} passHref className={classes.link}>
                <Typography variant="body1" component="a" className={currentPath === `/${pathAfterSlash}/training` ? classes.activeLink : classes.desActiveLink}>
                    {t('training')}
                </Typography>
            </Link>
            <Link href={`/${pathAfterSlash}/podcast`} passHref className={classes.link}>
                <Typography variant="body1" component="a" className={currentPath === `/${pathAfterSlash}/podcast` ? classes.activeLink : classes.desActiveLink}>
                    {t('podcast')}
                </Typography>
            </Link>
            <Link href={`/${pathAfterSlash}/whoarewe`} passHref className={classes.link}>
                <Typography variant="body1" component="a" className={currentPath === `/${pathAfterSlash}/whoarewe` ? classes.activeLink : classes.desActiveLink}>
                    {t('whoarewe')}
                </Typography>
            </Link>
            <Link href={`/${pathAfterSlash}/contact`} passHref className={classes.link}>
                <Typography variant="body1" component="a" className={currentPath === `/${pathAfterSlash}/contact` ? classes.activeLink : classes.desActiveLink}>
                    {t('contactus')}
                </Typography>
            </Link>
        </>
    );

    return (
        <AppBar position="static" className={classes.appBar} style={{ direction: pathAfterSlash === 'ar' ? 'rtl' : 'ltr' }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" className={classes.logo}>
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
                                role="presentation"
                                onClick={() => setAnchorEl(null)} // Close language menu when drawer is clicked
                                onKeyDown={toggleDrawer(false)}
                                className={classes.drawerWrapper}
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
                                    classes={{ paper: classes.menuPaper }}
                                    onClick={(e) => e.stopPropagation()} // Prevent the menu from closing the Drawer
                                >
                                    <MenuItem className={classes.menuItem} onClick={() => onSelectChange('en')}>English</MenuItem>
                                    <MenuItem className={classes.menuItem} onClick={() => onSelectChange('ar')}>العربية</MenuItem>
                                </Menu>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {renderLinks()}
                            <div className={classes.languageMenu} onClick={handleLanguageClick}>
                                <Typography variant="body1" component="a" className={classes.languageText}>
                                    {t('en')}
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
                                    classes={{ paper: classes.menuPaper }}
                                    onClick={(e) => e.stopPropagation()} // Prevent the menu from closing the Drawer
                                >
                                    <MenuItem className={classes.menuItem} onClick={() => onSelectChange('en')}>English</MenuItem>
                                    <MenuItem className={classes.menuItem} onClick={() => onSelectChange('ar')}>العربية</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Link href={`/${pathAfterSlash}/search`} passHref>
                            <div className={classes.searchIconWrapper}>
                                <IconButton sx={{ color: anchorEl ? colors.active : colors.desActive }}>
                                    <SearchIcon sx={{ color: anchorEl ? colors.active : colors.desActive }} />
                                </IconButton>
                            </div>
                        </Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
