import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Container
} from 'reactstrap';



const Profile = (props ) => {
        return (
            <Container className="mt-2">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Firsname: {props.user.firstname}</CardTitle>
                        <CardTitle>Lastname: {props.user.lastname}</CardTitle>
                        <CardText>Email: {props.user.email}</CardText>
                    </CardBody>
                </Card>
            </Container>
        )
    
}

export default Profile;