import styled from "styled-components";

export const Container = styled.div`
 padding: 0 3rem;
  
.title {
  top: 128px;
  left: 94px;
  width: 490px;
  height: 37px;
  text-align: left;
  font: normal normal bold 28px/37px Roboto;
  color: #E7E4E4;
  margin-top: 3%;
}

.movie {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

img {
  top: 193px;
  left: 94px;
  width: 353px;
  height: 530px;
  background: transparent url('img/Poster.png') 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
}
  
.infor{
  display: flex;
  flex-wrap: wrap;
  padding: 20px;  
  align-items: flex-start;
}

.vote{
  top: 193px;
  left: 551px;
  width: 35px;
  height: 32px;
  font: normal normal bold 24px/32px Roboto;
  color: #FB8200;
  margin: 0.7rem 0.1rem 0;
}

.infor svg{
  top: 204px;
  left: 603px;
  width: 18px;
  height: 16px;
  margin: 1rem 0.4rem 0rem 0.1rem;
  max-width: 50%;
}

.popular{
  top: 516px;
  left: 746px;
  width: 34px;
  height: 16px;
  font: normal normal normal 12px/16px Roboto;
  color: #919191;
  margin: 1rem 0.2rem;

}
.sin {
  line-height: 130%;
  top: 333px;
  left: 522px;
  width: 747px;
  height: 116px;
  text-align: left;
  font: normal normal normal 22px/29px Roboto;
  color: #E7E4E4;
  margin: 1rem 0.2rem 13rem;
  }

  
.gen{
  top: 287px;
  left: 522px;
  width: 559px;
  height: 26px;
  font: normal normal normal 20px/26px Roboto;
  color: #919191;
  margin: 3.4rem 0 0 7rem;
  margin-left: -15%;
}
 
.pro{
  top: 287px;
  left: 522px;
  width: 559px;
  height: 26px;
  text-align: left;
  font: normal normal normal 20px/26px Roboto;
  color: #919191;
}

 @media only screen and (min-width: 481px) and (max-width: 1024px){
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 80vh;
  }
  .infor{
    display: flex;
    height: 30vh;
    width: 80%;
    margin-top: 180%;
    margin-left: -80%;
    text-align: left;
  }
    
  img{
    width: 100%;
    margin-left: 10%;
    margin-top:18%;
  }
    
 .gen{
    margin-left: 0%;
  }
`;