import React, { Component } from 'react';
import { Get } from 'react-axios'

export class Avatar extends Component{
  render() {
    var url = "https://api.github.com/users/" + this.props.name;
    return (
      <div>
        <Get url={url}>
          {(error, response, isLoading, onReload) => {
            if(error) {
              // TODO
              return (<div>Something bad happened</div>)
            }
            else if(isLoading) {
              // TODO
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (
                <img
                  className="Avatar-image"
                  src={response.data.avatar_url}
                  alt={response.data.login}/>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    );
  }
}
