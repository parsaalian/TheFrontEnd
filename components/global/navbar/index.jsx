import styled from 'styled-components';
import React from 'react';
import { Button, Menu as M, Image as Im } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const Menu = styled(M)`
  position: ${(props) => (props.transparent ? 'absolute' : 'relative')} !important;
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: ${(props) => (props.transparent ? '0' : '1px solid #e2e2e2')} !important;
  background-color: ${(props) => (props.transparent ? 'transparent' : 'white')} !important;
  z-index: ${(props) => (props.transparent ? 1 : 0)} !important;
  width: 100%;
`;

const Image = styled(Im)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

function Navbar({ transparent }) {
  return (
    <Menu size="huge" transparent={transparent} secondary>
      <Menu.Item>
        <a href="/login">
          <Button primary>ورود</Button>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/blog">بلاگ</a>
        <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} color="#1d93f7" size="lg" icon={faBlog} />
      </Menu.Item>
      <Menu.Menu position="left">
        <Menu.Header>
          <a href="/">
            <Image
              style={{ marginRight: '1rem', marginTop: '2rem' }}
              size="mini"
              src="/images/logo.png"
            />
          </a>
        </Menu.Header>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;