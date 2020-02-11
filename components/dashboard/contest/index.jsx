import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import _ from 'lodash';
import Box from './box';

const Container = styled.div`
  ${space};
  background-color: #202020;
  color: white;
`;

const Header = styled(H)`
  color: white;
`;

function ContestContainer({ contests }) {
  return (
    <>
      <Container
         py={[5, 6, 6]}
        //py={[6, 7, 7]}
        px={5}
        style={{
          backgroundImage: "url('/images/contest3.png')",
          backgroundSize: 'cover',
        }}
      >
        <Fade down>
        <Grid inverted dir="RTL">
          <Grid.Row
            py={4}
            px={4}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            {
            _.map(contests, (contest) => {
              return(
              <Box contest={contest} key={contest.id}/>)
            })}
          </Grid.Row>
          
        </Grid>
        </Fade>
      </Container>
      {/* <Container py={5}></Container> */}
    </>
  );
}

export default ContestContainer;