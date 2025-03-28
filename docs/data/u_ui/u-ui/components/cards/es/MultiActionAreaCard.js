import * as React from 'react';
import Card from '@u_ui/u-ui/Card';
import CardContent from '@u_ui/u-ui/CardContent';
import CardMedia from '@u_ui/u-ui/CardMedia';
import Typography from '@u_ui/u-ui/Typography';
import Button from '@u_ui/u-ui/Button';
import CardActionArea from '@u_ui/u-ui/CardActionArea';
import CardActions from '@u_ui/u-ui/CardActions';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Lagarto
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Los lagartos son un extenso grupo de reptiles escamosos, con más de 6.000 especies.
              especies, repartidas por todos los continentes excepto la Antártida.
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartir
        </Button>
      </CardActions>
    </Card>
  );
}
