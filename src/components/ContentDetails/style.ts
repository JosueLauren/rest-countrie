import styled from "styled-components";


export const Container = styled.main`
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: 2rem 5rem;

    a {
        margin-bottom: 3rem;
        display: inline-block;
        text-decoration: none;
        color: ${(props) => props.theme.text};
        padding: 10px 40px;
        background-color: ${(props) => props.theme.elements};
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 3px 2px #8f44fd;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 500px;

     

        > img {
            width: 39%;
            margin-right: 1%;
            border: 15px solid;
            border-color: ${(props) => props.theme.elements};
            border-radius: 5px;
        }

        > div {
            margin-left: 1%;
            width: 69%;
            padding: 0 2rem;

            h3 {
                    margin: 20px auto;
                    font-size: 2rem;
                }

            > div {
                display: flex;
                gap: 5rem;

                p {
                    font-size: 1.1rem;
                    margin: 5px auto;
                    font-weight: 600;

                    span {
                        margin-left: 10px;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                }

            }

         > p {
            margin-top: 3rem;
            font-size: 1.1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;

            > span {
                font-size: 1rem;
                padding: 5px 40px;
                background-color: ${(props) => props.theme.elements};
                border-radius: 5px;
                box-shadow: 0 0 3px 2px #8f44fd;
              }
            }   
        }
    
    }

    @media screen and (max-width: 900px) {
        padding: 2rem 1rem;

        > div {
            flex-direction:  column;
            height: auto;

            img {
            width: 100%;
            
         }

            > div {
                width: 100%;
                text-align: left;
                padding: 0;
                font-size: 1;

               > div {
                flex-direction: column;
                }

                p, span {
                font-size: 1rem;
          
                }
              
            }

        }
    }

`