import React, { Component } from 'react'
import {Shape, Segment, Image, Button, Divider } from 'semantic-ui-react'

class ShapeExampleType extends Component {
  state = { percent: 33 }

  animate = () =>{
    
  }

  render() {
    return (
      <Segment>
        <Shape type="auto">
          <Shape.Side active>
            <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
          </Shape.Side>
          <Shape.Side>
            <Image src="https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg" />
          </Shape.Side>
        </Shape>
        <Divider />
        <Button.Group>
          <Button icon="arrow left" />
          <Button icon="arrow up" />
          <Button icon="arrow down" />
          <Button icon="arrow right" />
        </Button.Group>

        <Button.Group style={{margin: '0 0 0 5px'}}>
          <Button icon="retweet icon" />
          <Button icon="flipped retweet icon" />
        </Button.Group>
      </Segment>
    );
  }
}

export default ShapeExampleType
