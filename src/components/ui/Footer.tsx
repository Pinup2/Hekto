import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#F8F8FD", mt: 4, py: 5, width: "100%" }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
            >
              Hekto
            </Typography>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter Email Address"
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                    backgroundColor: "#FFF",
                    borderColor: "#e0e0e0",
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor: "#FB2E86",
                  borderRadius: " 5px ",
                  padding: "4px 5px",
                  position: "absolute",
                  right: "3px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                Sign Up
              </Button>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: "#8C8C8C" }}
            >
              17 Princess Road, London, Greater London NW1 8JR, UK
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
            >
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Laptops & Computers
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Cameras & Photography
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Smart Phones & Tablets
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Video Games & Consoles
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Waterproof Headphones
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
            >
              Customer Care
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                My Account
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Discount
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Returns
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Orders History
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Order Tracking
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
            >
              Pages
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Blog
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Browse the Shop
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Category
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Pre-Built Pages
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ color: "##8A8FB9" }}
              >
                Visual Composer Elements
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#E0D3F5", width: "100%", mb: -5, mt: 10 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#8C8C8C" }}>
            ©Webecy - All Rights Reserved
          </Typography>
          <Box>
            <IconButton
              href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dru_RU"
              color="inherit"
            >
              <Facebook
                sx={{
                  backgroundColor: "#101750",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#1A2E63",
                  },
                  borderRadius: "50%",
                  padding: 1,
                  width: 24,
                  height: 24,
                }}
              />
            </IconButton>
            <IconButton href="https://x.com/?lang=ru" color="inherit">
              <Twitter
                sx={{
                  backgroundColor: "#101750",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#1A2E63",
                  },
                  borderRadius: "50%",
                  padding: 1,
                  width: 24,
                  height: 24,
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fnurrablake%2F&is_from_rle"
              color="inherit"
            >
              <Instagram
                sx={{
                  backgroundColor: "#101750",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#1A2E63",
                  },
                  borderRadius: "50%",
                  padding: 1,
                  width: 24,
                  height: 24,
                }}
              />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
