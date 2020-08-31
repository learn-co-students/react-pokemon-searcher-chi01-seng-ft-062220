import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const { name, hp, sprites, id } = this.props.pokie
    return (
      <Card>
        <div key={id}>
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
