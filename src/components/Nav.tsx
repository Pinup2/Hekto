import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar: React.FC = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    📧 mhhasanul@gmail.com 📞 (12345)67890
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MenuItem>
                        <Select value="EN" displayEmpty>
                            <MenuItem value="EN">English</MenuItem>
                            <MenuItem value="RU">Russian</MenuItem>
                        </Select>
                    </MenuItem>
                    <MenuItem>
                        <Select value="USD" displayEmpty>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                        </Select>
                    </MenuItem>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <IconButton color="inherit">
                        <FavoriteBorder />
                    </IconButton>
                    <IconButton color="inherit">
                        <ShoppingCart />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Hekto
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Products</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Box>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    </Box>
);

export default Navbar;
