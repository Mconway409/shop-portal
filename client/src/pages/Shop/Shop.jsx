import React from 'react';
import ProductsList from '../../__mock__/ProductsList';
import Masonry from 'react-masonry-css';
import useStyles from './styles';
import {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from '@material-ui/core';

const Shop = () => {
  const classes = useStyles();
  const breakPoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakPoints}
      className={classes.myMasonryGrid}
      columnClassName={classes.myMasonryGridColumn}>
      {ProductsList
        ? ProductsList.map((product, key) => {
            return (
              <div key={key} className={classes.myMasonryGridColumnDiv}>
                <Card>
                  <CardHeader title={product.title} subheader={product.price} />
                  <CardMedia
                    style={{ height: '200px' }}
                    image={product.imgUrl}
                  />
                  <CardContent>
                    <Typography variant='body2' component='p'>
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>ADD TO CART</Button>
                    <Button size='small'>DETAILS</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : null}
    </Masonry>
  );
};

export default Shop;
