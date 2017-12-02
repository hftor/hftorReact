import React from 'react';
import { Get } from 'react-axios'

export class ListOfRepos extends React.Component {
  render() {
    var url = "https://api.github.com/users/" + this.props.name + "/repos"
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
              let repos = response.data.map((repo) => {
                return(<div key={repo.id}>{repo.name}</div>)
                  });
              return (
                repos
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    );
  }
}
