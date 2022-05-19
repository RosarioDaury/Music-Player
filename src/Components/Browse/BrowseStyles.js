import styled from 'styled-components';


export const Conteiner = styled.div`
    box-sizing: border-box;
    margin-left: 1rem;
    width: 90%;

   
    h1{
        margin: .5rem 0;
        font-size: 3rem;
        font-weight: bold;
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 22px;
        transition: all .5s ease-out;
    
    }

    .filter-conteiner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 45%;
    }

    .filter{
        position: relative;
        font-weight: lighter;

        ::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 20%;
            height: 2px;
            background-color: green;
            color: green;
            transition: all .3s ease-out;
        }

        &:hover::after{
            width: 105%;
        } 
    }
`

export const DivBrowse = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
    grid-gap: 1rem;

    .playing{
        border: 3px solid green;

        ::after{
            content: 'Playing...';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            z-index: 1;
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 285px;
    height: 155px;  
    position: relative;
    overflow: hidden;
    margin: 0;

    .after{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50px;
        background-color: rgb(50,205,50, .6);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        transform: translateX(100%);
        transition: all .2s ease-out;
        cursor: pointer;
        z-index: 2;
    }

    &:hover .after{
        transform: translateX(0);
    }
    img{
        width: 100%;
        height: 100%;
    }
`