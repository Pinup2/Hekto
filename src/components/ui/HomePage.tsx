import { Box, Grid, Typography, Button, Container } from '@mui/material';
import useProductFetch  from '../../hooks/useProductFetch';
import ProductCard from '../ui/ProductCard'; // Assuming you have a ProductCard component
import Layout from '../../Layout/layout';


    const HomePage = () => {
      const { products, loading, error } = useProductFetch();
    
      if (loading) {
        return <Typography>Loading...</Typography>;
      }
    
      if (error) {
        return <Typography>Error: {error}</Typography>;
      }
    
      const featuredProducts = products.slice(0, 4); 
      const latestProducts = products.slice(4, 8); 
      const trendingProducts = products.slice(8, 12); 
    
      const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Cart", href: "/cart" }
      ];
      return (
        <Layout breadcrumbs={breadcrumbs}>
        <Container>
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h3">Featured Products</Typography>
            <Grid container spacing={2}>
              {featuredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} viewType="grid" />
                </Grid>
              ))}
            </Grid>
          </Box>
    
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h3">Latest Products</Typography>
            <Grid container spacing={2}>
              {latestProducts.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product}  viewType="grid" />
                </Grid>
              ))}
            </Grid>
          </Box>
    
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h3">Trending Products</Typography>
            <Grid container spacing={2}>
              {trendingProducts.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} viewType="grid" />
                </Grid>
              ))}
            </Grid>
          </Box>
    
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h3">Discount Items</Typography>
            <Grid container spacing={2}>
              {products.filter(p => p.discountPercentage > 0).map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} viewType="grid" />
                </Grid>
              ))}
            </Grid>
          </Box>
    
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h3">Top Categories</Typography>
            <Grid container spacing={2}>
              {products.slice(0, 4).map((product) => ( // Example of showing top categories
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} viewType="grid" />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        </Layout>
      );
    };
    

export default HomePage;
