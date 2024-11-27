import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

const products = [
  {
    title: "NEW PIXL Legal Big Puff Devices",
    description: "The latest 10 flavours of legal big puff devices by PIXL.",
    color: "#f39ad0",
    company: 'PIXL',
    image: "product.png",
  },
  {
    title: "SOON Gold Bar 20K Apollo Legal Big Puff Devices",
    description: "The latest range by Gold bar.",
    color: "#c3ab55",
    company: 'APOLLO',
    image: "product.png",
  },
  {
    title: "NEW OXVA Xlim Go Pod Kit + OX Passion Nic Salt Bundle Kits",
    description: "6 new combinations from the best of OXVA.",
    color: "#7fddf4",
    company: 'OXVA',
    image: "product.png",
  },
  {
    title: "NEW Pablo Exclusive Nicotine Pouches",
    description: "The latest 10 flavours by Pablo Exclusive.",
    color: "#de4f55",
    image: "product.png",
    company: 'PABLO'
  },
];

const ProductGrid = () => {
  return (
    <Box sx={{ p: { xs: 3, sm: 5, md: 7 }, backgroundColor: "#f4f4f4" }}>
      <Grid container spacing={0}
        sx={{
          // display: "flex",
          // justifyContent: "center",
          alignItems: "stretch",
          "& > div": {
            flex: "1 1 0",
            transition: "flex 0.5s ease, transform 0.5s ease",
          },
          "& > div:hover": {
            flex: "1.4 1 0",

          },
        }}
      >
        {products.map((product, index) => (
          <Grid
            // item
            // xs={12}
            // sm={6}
            // md={2.8}
            key={index}
            sx={{
              transition: "transform 0.5s ease", 
              "&:hover > .MuiCard-root": {
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: product.color,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                borderRadius: {
                  md:
                    index === 0
                      ? "48px 0 0 48px"
                      : index === products.length - 1
                        ? "0 48px 48px 0"
                        : 0,
                  sm:
                    index === 0
                      ? "48px 0 0 0px"
                      : index === products.length - 1
                        ? "0 0px 48px 0"
                        : 0,
                  xs:
                    index === 0
                      ? "48px 0 0 0px"
                      : index === products.length - 1
                        ? "0 0px 48px 0"
                        : 0,
                },
              }}
            >         
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Orbitron', sans-serif",
                  color: "rgba(107,107,107,0.3)",
                  margin: 0,
                  lineHeight:.8,
                  fontSize: { xs: "60px", sm: "60px", md: "70px" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {product.company}
              </Typography>

              {product.image && (
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: { xs: 250, sm: 250, md: 320 },
                    flexGrow: 1,
                    p: { xs: "20px 7px 0px 4px", sm: "25px 7px 0px 4px", md: "30px 11px 6px 8px" },
                    objectFit: 'contain',
                  }}
                />
              )}

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  minHeight: { xs: 60, sm: 80, md: 80 },
                  padding: '12px'
                }}>
                <Typography sx={{ fontWeight: 560, fontSize: '18px' }}>
                  {product.title}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>{product.description}</Typography>
              </CardContent>

              <Box
                sx={{ paddingBottom: '1.5rem', paddingLeft: '1rem' }}
              >
                <Button
                  variant="text"
                  size="small"
                  sx={{ backgroundColor: "#fff", color: "#000" }}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;


