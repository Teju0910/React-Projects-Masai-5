import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;

    & div:nth-child(odd){
        color: red;
        border: 1px solid black;
    }
`

export default Flex