import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Markdown from 'react-markdown';

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({ modalOpen: true });
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({ modalOpen: false });
  }

  render() {
    const { modalOpen } = this.state;
    const { terms } = this.props;
    return (
      <Modal
        trigger={
          <a href="#" onClick={this.handleOpen}>
            مطالعه قوانین
          </a>
        }
        open={modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Modal.Content>
          <div dir="RTL">
            <Markdown source={terms.term} />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.handleClose}>
            بستن
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Terms;
