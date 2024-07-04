import React from 'react';
import { Avatar, Box, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>
              S
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className='space-y-2'>
            <p>Sandy</p>
            <p className='font-semibold text-lg'>April 10, 2024</p>
          </div>
          <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
