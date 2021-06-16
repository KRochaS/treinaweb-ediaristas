import React from 'react';
import { 
        UserInformationContainer, 
        UserName,  
        UserDescription,
        AvatarStyled,
        RatingStyled
} from './UserInformation.style';

export function UserInformation() {
    return (
        <UserInformationContainer>
            <AvatarStyled src="https://avatars.githubusercontent.com/u/27026831?v=4"/>
            <UserName> Karine </UserName>
            <RatingStyled />
            <UserDescription />
        </UserInformationContainer>
    )
}