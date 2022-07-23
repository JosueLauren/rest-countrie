import styled from "styled-components";

import iconSearch from "./../../assets/search.svg";



export const Container = styled.main`
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};

    .container-coutries{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 20px;
        padding: 0 5rem;

        > div {

            background-color: ${(props) => props.theme.elements};
            max-width: 280px;
            width: 100%;
            padding-bottom: 30px;
            cursor: pointer;
            border-radius: 5px;
            transition: transform 0.3s linear;

            &:hover {
                transform: scale(1.1);
            }
            
            img {
                max-width: 100%;
                object-fit: cover;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }

            h3 {
                color: ${(props) => props.theme.text};
                margin: 10px auto;
                font-size: 1.5rem;
                padding: 0 20px;
            }

            p {
                color: ${(props) => props.theme.text};
                font-size: 1.1rem;
                padding: 0 20px;
                margin-bottom: 10px;

                span {
                    opacity: 0.8;
                    font-size: 1rem;
                }
            }
                
        }

    }
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