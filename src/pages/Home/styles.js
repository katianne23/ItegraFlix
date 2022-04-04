import styled from 'styled-components';

export const Container = styled.div `
  padding: 2rem;

h1{
    color: #E7E4E4;
    font: normal normal bold 28px/37px Roboto;
    left: 106px;
    letter-spacing: 0px;
    height: 37px;
    margin: 0.1rem 1rem;
    text-align: left;
    top: 122px;
    width: 127px;
   
}


`;



export const MovieList = styled.ul `

    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;


`;

export const Movie = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;


img{
    top: 185px;
    left: 106px;
    width: 197px;
    height: 296px;
    border-radius: 2px;

}
.title{
    left: 106px;
    height: 19px;
    top: 489px;
    width: 172px;
    color: #E7E4E4;
    text-align: left;
    font: normal normal bold 14px/19px Roboto;
    letter-spacing: 0px;
    color: #E7E4E4;
}
.infor{
    width: 200px;
    display: flex;
    justify-content: space-between;
    color: #919191;
    font: normal normal bold 12px/16px Roboto;
    margin-top: 25px;
    line-height: 1.8;
    
    
}

.star svg{
    top: 518px;
    left: 106px;
    width: 13px;
    height: 12px;
}

.heart svg{
    top: 518px;
    left: 106px;
    width: 13px;
    height: 12px;
}


.vote{
    top: 516px;
    left: 122px;
    width: 17px;
    height: 16px;
    font: normal normal bold 12px/16px Roboto;
    letter-spacing: 0px;
    color: #FB8200;
    line-height: 1.8;
}

a{
    transition: all 0.3s;
}
a:hover{
    transform: scale(1.1);
}

@media only screen and (min-width: 481px) and (max-width: 1024px){
    
    .infor{
        display: gap;
        height: 12vh;
        width: 55%;
        position: sticky;
        
    }
    img{
        margin: 0;
    }
    
}

`