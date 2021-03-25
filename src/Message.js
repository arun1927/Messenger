import React from 'react';
import { Card,CardContent,Typography } from '@material-ui/core';
import './Message.css';
function Message( {message, username }){
    const isuser = username === message.username;
	
	return(
		<div  className={'message ${isuser && "message__user"}'} >
		<Card className={isuser ? "message__usercard" : "message__guestcard"} >
		  <CardContent>
		   <Typography
		   		color="white"
		   		variant="h5"
		   		component="h2"
		   >
		   		{!isuser && `${message.username || 'unknown user'}:`} {message.text}
		   </Typography>

		  </CardContent>
		</Card>
		</div>
		)
}
export default Message;