import styled from 'styled-components';

export const DivPlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: rgb(42, 42, 42);



    h2{
        margin-bottom: 0;
    }
    p{
        margin-top: 0;
    }


    .song-info{
        width: auto;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            margin-right: 1rem;
            width: 155px;
            height: 98%;
        }
    }
    

    .audio-controllers{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .buttons > *{
            width: 35px;
            height: 35px;
            cursor: pointer;
            margin: 0;
            &:hover{
                color: rgb(50,205,50, .5);
            }
        }

        .range{
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;

            .mute,
            .volume-down,
            .volume-up{
                width: 20px;
                height: 20px;
                cursor: pointer;
                margin-right: 10px;
                transition: all 0.2s ease-out;
                &:hover{
                    color: gray;
                }

                &:active{
                    transform: scale(1.7);
                }
            }

            .muted{
                color: black;
            }
        }


        input[type='range'] {
            width: 80%;
            height: 3px;
            margin-right: 1.5rem;
            overflow: hidden;
            -webkit-appearance: none;
            background-color: white;
            cursor: pointer;
        }

        input[type='range']::-webkit-slider-runnable-track {
            height: 0px;
            -webkit-appearance: none;
        }

        input[type='range']::-webkit-slider-thumb {
            background: white;
            box-shadow: -600px 0 0 600px green;
        }
    }
`;

