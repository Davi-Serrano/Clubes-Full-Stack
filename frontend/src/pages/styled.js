import styled from "styled-components"

export  const Form = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
        input, label{
            display: flex;
            text-align: center;

            background: none;
            color: white;
            
            font-size: 25px;
            font-weight: 700;

            margin: 1em;
            padding: .5em;

                &:hover{
                cursor: pointer;
                transform: translateY(-4px)
            }
        }

        label{
            padding: 0;
            margin: 0;
        }

`
export const Nav = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        
        margin: 1em;

        max-width: 800px;
`

export const Club = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
`

export const Section = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
`

export const Button = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        padding: .5em;
        margin: 1em;
        
        font-weight: 700;

        background: black;
        color: white;
        border: 1px solid white;
        border-radius: 10px;

        transition: .5;
       
        &:hover{
            cursor: pointer;
            transform: translateY(-4px)
        }

`