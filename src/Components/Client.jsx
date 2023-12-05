import React from 'react';
import styled, { keyframes, css } from "styled-components";
import Client1 from '../assets/Client/client1.png';
import Client2 from '../assets/Client/client2.png';
import Client3 from '../assets/Client/client3.png';
import Client4 from '../assets/Client/client4.png';
import Client5 from '../assets/Client/client5.jpg';
import Client6 from '../assets/Client/client6.png';
import Client7 from '../assets/Client/client7.jpg';
import Client8 from '../assets/Client/client8.png';
import Client9 from '../assets/Client/client9.jpg';
import Client10 from '../assets/Client/client10.gif';
import Client11 from '../assets/Client/client11.jpg';
import Client12 from '../assets/Client/client12.png';
import Client13 from '../assets/Client/client13.jpg';
import Client14 from '../assets/Client/client14.jpg';
import Client15 from '../assets/Client/client15.jpg';
import Client16 from '../assets/Client/client16.png';
import Client17 from '../assets/Client/client17.png';
import Client18 from '../assets/Client/client18.jpg';
import Client19 from '../assets/Client/client19.png';
import Client20 from '../assets/Client/client20.png';
import Client21 from '../assets/Client/client21.jpg';

const Client = () => {
    const row1 = [
        Client1, Client2, Client3, Client4, Client5,
        Client6, Client7, Client8, Client9, Client10
      ];
    
      const row2 = [
        Client11, Client12, Client13, Client14, Client15,
        Client16, Client17, Client18, Client19, Client20, Client21
      ];

      return (
        <AppContainer>
          <Wrapper>
            <Text >Our <span className='text-Orange'>Client</span></Text>
            <br /><br /><br />
            
            <Marquee>
              <MarqueeGroup>
                {row1.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {row1.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
            <br />
            <br />
            <Marquee>
              <MarqueeGroup2>
                {row2.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {row2.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>
        </AppContainer>
      );
    }

export default Client;


const AppContainer = styled.div`
  width: 80vw;
  height: 80vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;


const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 2rem + 50vmin, 40rem);
  padding: calc(clamp(2rem, 1rem + 2vmin, 2rem) / 2);
`;

const Image = styled.img`
  object-fit: contain;
`;