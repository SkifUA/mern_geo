import React, { Component } from 'react'

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import './PlaceItem.css'

class PlaceItem extends Component {
  constructor() {
    super();
    this.state = {
      showMap: false
    }
  }

  openMapHandler = () => {
    this.setState({showMap: true})
  }

  closeMapHandler = () => {
    this.setState({showMap: false})
  }

  render() {
    const props = this.props

    return <React.Fragment>
      <Modal
        show={this.state.showMap}
        onCancel={this.closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={this.closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map
            center={props.coordinates}
            zoom={16}
          />
        </div>
      </Modal>
      <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse onClick={this.openMapHandler}>View On Map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
    </React.Fragment>
  }
}

export default PlaceItem