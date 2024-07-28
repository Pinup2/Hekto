import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Button, Container } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FB2E86",
  color: "white",
  borderRadius: theme.shape.borderRadius,
  minHeight: "36px",
  minWidth: "36px",
  "&:hover": {
    backgroundColor: alpha("#FB2E86", 0.75),
  },
}));

const Navbar: React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      color="tertiary"
      sx={{ height: 48, boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "48px",
            margin: "-9px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MailOutlineIcon sx={{ color: "white" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Josefin Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                mhhasanul@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon sx={{ color: "white" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Josefin Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                (12345)67890
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Select
              value="EN"
              displayEmpty
              sx={{
                color: "white",
                fontFamily: "Josefin Sans",
                fontWeight: 600,
                fontSize: "16px",
                ".MuiSelect-select": {
                  paddingRight: (theme) => theme.spacing(2),
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            >
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="RU">Russian</MenuItem>
            </Select>
            <Select
              value="USD"
              displayEmpty
              sx={{
                color: "white",
                fontFamily: "Josefin Sans",
                fontWeight: 600,
                fontSize: "16px",
                ".MuiSelect-select": {
                  paddingRight: (theme) => theme.spacing(2),
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </Select>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Josefin Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Login
              </Typography>
              <AccountCircle sx={{ color: "white" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Josefin Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Wishlist
              </Typography>
              <FavoriteBorder sx={{ color: "white" }} />
              <ShoppingCart sx={{ color: "white" }} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <AppBar
      position="static"
      color="transparent"
      sx={{ padding: "0 10px", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Hekto
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Box>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
);

export default Navbar;
