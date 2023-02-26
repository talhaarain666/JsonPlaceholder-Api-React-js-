import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function BasicCard(props) {
    const { username, name, email, phone, website, address } = props;





    return (
        <Card sx={{ minWidth: 275, maxWidth: 300, border: "1px solid grey" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {username}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {email}
                </Typography>

                <Box display={"flex"} flexDirection="column" alignItems="start" paddingLeft={"5%"}>

                    <Box display={"flex"} alignItems="center" width="100%">
                        <PhoneIcon className='userPhoneIcon' />
                        <Typography paddingLeft={"3%"} variant="body2">
                            {phone}
                        </Typography>
                    </Box>

                    <Box display={"flex"} alignItems="center" width="100%">
                        <LanguageIcon className='userWebsiteIcon' />
                        <Typography paddingLeft={"3%"} variant="body2">
                            {website}
                        </Typography>
                    </Box>

                    <Box display={"flex"} alignItems="center" width="100%">
                        <LocationOnIcon className='userLocationIcon' />
                        <Typography paddingLeft={"3%"} variant="body2">
                            {address.city}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small">More Details</Button>
            </CardActions>
        </Card>
    );
}