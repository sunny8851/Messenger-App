import { CardContent,Card,Typography } from '@mui/material';
import React from 'react'
import './index.css';
export const Message = (props,userName) => {
    //const isuser=Name===Text.Name
    const isuser=props.userName===props.name
    // console.log(isuser)
    return (
        // <div className="item">
        //     <h4>{props.name}:    {props.text}</h4>
        // </div>
        <div className={`item ${isuser&&'item_user'}`}>

        <Card className={isuser? "message-usercard":"message-guestcard"}>
        <CardContent>
        <Typography  
            varient="h5"
            component="h2">
            {!isuser && `${props.name ||"unknown user"} :`}  {props.text}
        </Typography>
        </CardContent>
        </Card>
        </div>

        
    )
}
