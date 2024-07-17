import { Box, Container, Grid, Typography, TextField, Button, Link, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from "../styles/themes";

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: '#F5F5F5', // Greyish background
    borderTop: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(4, 0),
}));

const SubscribeInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
    },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.main, // Purple color for icons
}));

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="primary" gutterBottom>
                            Hekto
                        </Typography>
                        <SubscribeInput
                            variant="outlined"
                            size="small"
                            placeholder="Enter Email Address"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button variant="contained" color="secondary">
                                            Sign Up
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                            17 Princess Road, London, Greater London NW1 8JR, UK
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Categories
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="textSecondary" underline="none">
                                Laptops & Computers
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Cameras & Photography
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Smart Phones & Tablets
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Video Games & Consoles
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Waterproof Headphones
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Customer Care
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="textSecondary" underline="none">
                                My Account
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Discount
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Returns
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Orders History
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Order Tracking
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Pages
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="textSecondary" underline="none">
                                Blog
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Browse the Shop
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Category
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Pre-Built Pages
                            </Link>
                            <Link href="#" color="textSecondary" underline="none">
                                Visual Composer Elements
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center" borderTop={`1px solid ${theme.palette.primary.main}`} pt={2}>
                    <Typography variant="body2" color="textSecondary">
                        ©Webecy - All Rights Reserved
                    </Typography>
                    <Box mt={2}>
                        <SocialIconButton >
                            <FacebookIcon />
                        </SocialIconButton>
                        <SocialIconButton >
                            <TwitterIcon />
                        </SocialIconButton>
                        <SocialIconButton >
                            <InstagramIcon />
                        </SocialIconButton>
                    </Box>
                </Box>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
