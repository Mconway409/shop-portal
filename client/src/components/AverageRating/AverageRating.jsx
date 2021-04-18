import React from 'react';
import Rating  from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const AverageRating = (props) => {
// const [value] = React.useState(props.rating);
  return (
    <div>
      <Box component="fieldset" mb={0} borderColor="transparent">
        <Typography component="legend">Average Rating</Typography>
        <Rating name="rating" value={props.rating} precision={0.5} readOnly />
      </Box>
    </div>
  );
}

export default AverageRating;