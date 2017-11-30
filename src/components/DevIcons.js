import React, { Component } from 'react';
import DefaultIcon from 'react-devicon/github/original-wordmark'
import ReactIcon from 'react-devicon/react/original-wordmark';

export class DevIcons extends Component {
    render() {
      if(this.props.icon === 'react'){
        return (
          <ReactIcon width={100} height={100}/>
        );
      }
      return (
        <DefaultIcon width={100} height={100}/>
      );
    }
  }
