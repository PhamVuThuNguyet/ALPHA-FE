import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

class MainMap extends React.Component{
    render(){
        return(
            <GoogleMap/>
        );
    }
}

export default withScriptjs(withGoogleMap(MainMap));