import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { Button, Menu as M, Image as Im } from 'semantic-ui-react';

const Menu = styled(M)`
  position: ${(props) => (props.transparent ? 'absolute' : 'relative')} !important;
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: ${(props) => (props.transparent ? '0' : '1px solid #e2e2e2')} !important;
  background-color: transparent !important;
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
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>ورود</Button>
        </Menu.Item>
        <Menu.Item>
          <Link href="/resources">منابع</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/blog">بلاگ</Link>
        </Menu.Item>
      </Menu.Menu>

      <Menu.Header style={{ marginRight: '1rem' }}>
        <Link href="/">
          <Image size="mini" src="/images/logo.png" />
        </Link>
      </Menu.Header>
    </Menu>
  );
}

export default Navbar;