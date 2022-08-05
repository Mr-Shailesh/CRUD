import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({data, deleteHandler, image}) {
    console.log(image)
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://thumbs.dreamstime.com/b/white-flower-beautiful-hd-pic-japantown-215486907.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.username}
        </Typography>
        <p>{data.email}</p>
      </CardContent>
      <CardActions style={{textAlign: "center", justifyContent: "center"}}>
        <Button size="small" onClick={deleteHandler}>Delete</Button>
        
      </CardActions>
    </Card>
  );
}
