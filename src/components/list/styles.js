
import styled from 'styled-components/native';


export const Container = styled.View`
background-color: #FFF;
flex: 1;
justify-content: center;
margin: 1px;
align-items: ${props => props.user? 'flex-end' : 'flex-start'} ;
`;

export const ViewUser = styled.View`
background-color: ${props => props.user? '#6A5ACD' : '#40E0D0'} ;
align-items: ${props => props.user? 'flex-end' : 'flex-start'} ;
justify-content: center;
width: 75%;
height: 50px;
margin: 5px;
border-radius: 10px;
padding: 5px;
`;

export const Text = styled.Text`
color: #000;
font-size: 17px;
`;

export const TextName = styled.Text`
color: #000;
font-size: 8px;
`;

export const TextDate = styled.Text`
color: #000;
font-size: 5px;
`;






