import React from 'react';
import './Map.css';
import Grid from '@mui/material/Grid';
import MainMap from './MainMap';


class Map extends React.Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <h1>Intro</h1>
                </Grid>
                <Grid item xs={8}>
                    <MainMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBcJ_wdqHZZFttshBqyE_f0wfVDa4bjgt8&callback=initMap`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                        mapElement={<div style={{ height: `100%` }} />} />
                </Grid>
                <Grid item xs={2}>
                    <h1>History</h1>
                </Grid>
            </Grid>
        );
    }
}

export default Map;
