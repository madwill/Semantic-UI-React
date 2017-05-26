import React from 'react';
import {Shape, Segment, Image} from 'semantic-ui-react';

const ShapeExampleType = () => (
  <Segment>
    <Shape type="auto">
      <Shape.Side active>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
      </Shape.Side>
      <Shape.Side>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg" />
      </Shape.Side>
    </Shape>
    <Shape type="square" />
    <Shape type="auto" />
  </Segment>
);

export default ShapeExampleType;
