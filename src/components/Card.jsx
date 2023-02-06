import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'

export const CardProduct = ({ descripcion }) => {
    const [counter, setCounter] = useState(0)
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
                        {counter}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 3fr)' }}>
                <Button onClick={() => setCounter(counter + 1)} size="small" color="primary">
                    + 1
                </Button>
                <Button onClick={() => setCounter(counter - 1)} size="small" color="primary">
                    - 1
                </Button>
            </CardActions>
        </Card>
    )
}
