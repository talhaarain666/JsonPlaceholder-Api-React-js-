import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    const { id, title, url, thumbnailUrl } = props
    return (
        <Badge badgeContent={id} color="primary">
            <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                <CardActionArea>
                    <a href={url} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={thumbnailUrl}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                    </a>
                </CardActionArea>
            </Card>
        </Badge>
    );
}