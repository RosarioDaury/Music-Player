import styled from 'styled-components';

export const DivSearch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: .5rem 0;

    .search-area{
        width: 25%;
        display: flex;
        align-items: center;

        span{
            padding: .5rem;
        }
    }
`

export const SearchBar = styled.input`
    width: 70%;
    padding: .4rem;
    border-radius: 15px;
    border: none;
`


export const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 10%;
    margin-right: 10rem;
    
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: solid 4px green;
    }
`