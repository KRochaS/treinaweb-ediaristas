import React from 'react';
import { 
        UserInformationContainer, 
        UserName,  
        UserDescription,
        AvatarStyled,
        RatingStyled
} from './UserInformation.style';

type UserInformationProps = {
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

export function UserInformation({ picture, name, rating, description }: UserInformationProps) {
    return (
        <UserInformationContainer>
            <AvatarStyled src={picture}>
                {name[0]}
            </AvatarStyled>
            <UserName> { name } </UserName>
            <RatingStyled readOnly value={rating} />
            <UserDescription> { description } </UserDescription>
        </UserInformationContainer>
    )
}