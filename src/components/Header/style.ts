import styled from "styled-components";


export const Container = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 5rem;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.text};

    p {
        font-weight: 800;
        font-size: 2rem;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: ${(props) => props.theme.text};

        img {
            margin: 10px;  
        }
    }

    @media screen and (max-width: 739px){
        padding: 0 1rem;
        p, button {
            font-size: 0.8rem;
        }
    }

`