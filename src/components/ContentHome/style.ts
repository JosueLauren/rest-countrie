import styled from "styled-components";

import iconSearch from "./../../assets/search.svg";



export const Container = styled.main`
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
`

export const ContainerFilters = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem;

    input {
        background-image: url(${iconSearch});
        background-repeat: no-repeat;
        background-position: left 10px center;
        background-color: ${(props) => props.theme.elements};
        padding: 15px 50px;
        width: 350px;
        border: none;
        border-radius: 5px;
        color: ${(props) => props.theme.text};
        font-size: 1.1rem;

        &::placeholder {
            color: ${(props) => props.theme.text};
            font-size: 1.1rem;
        }
     }

     select {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.text};
        width: 200px;
        padding: 10px;
        font-size: 1.1rem;
        border: none;
        border-radius: 5px;
     }
`