import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";

import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers of the world',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers of the world',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm({
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return <div>
      <Card>
        <h2>Could not found place!</h2>
      </Card>
    </div>;
  }

  const updateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs)
  }

  if (isLoading) {
    return <div>
      <Card>
        <h2>Loading...</h2>
      </Card>
    </div>;
  }
  return (
    <form className="place-form" onSubmit={updateSubmitHandler}>
  <Input
    id="title"
    element="input"
    type="text"
    label="Title"
    validators={[VALIDATOR_REQUIRE()]}
    errorText="Please enter valid title."
    onInput={inputHandler}
    initialValue={formState.inputs.title.value}
    initialValid={formState.inputs.title.isValid}
  />
  <Input
    id="description"
    type="textarea"
    label="Description"
    validators={[VALIDATOR_MINLENGTH(5)]}
    errorText="Please enter valid description (at least 5 characters)."
    onInput={inputHandler}
    initialValue={formState.inputs.description.value}
    initialValid={formState.inputs.description.isValid}
  />
  <Button type="submit" disabled={!formState.isValid}>
    Update place
  </Button>
</form>
  )
};

export default UpdatePlace;