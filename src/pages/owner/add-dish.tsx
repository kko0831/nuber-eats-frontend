import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { 
  createDish, 
  createDishVariables
} from "../../__generated__/createDish";
import { MY_RESTAURANT_QUERY } from "./my-restaurant";

const CREATE_DISH_MUTATION = gql`
  mutation createDish($input: CreateDishInput!) {
    createDish(input: $input) {
      ok
      error
    }
  }
`;

interface IParams {
  restaurantId: string;
}

interface IForm {
  name: string;
  price: string;
  description: string;
  [key: string]: string;
}

export const AddDish = () => {
  const { restaurantId } = useParams<IParams>();
  const history = useHistory();
  const [createDishMutation, { loading }] = useMutation<
    createDish,
    createDishVariables
  >(CREATE_DISH_MUTATION, {
    refetchQueries: [
      {
        query: MY_RESTAURANT_QUERY,
        variables: {
          input: {
            id: +restaurantId,
          },                
        },
      },
    ],
  });
  const { 
    register,
    handleSubmit,
    formState,
    getValues,
    setValue,
  } = useForm<IForm>({
    mode: "onChange",
  });
  const onSubmit = () => {
    const { name, price, description, ...rest } = getValues();
    const optionObjects = options.map((theId) => {
      const optionChoice = 
        choices
          .filter((choice) => choice.optionId === theId)
          .map((choice) => ({
            name: rest[`${theId}-${choice.id}-choiceName`],
            extra: +rest[`${theId}-${choice.id}-choiceExtra`],
          }));
      return {
        name: rest[`${theId}-optionName`],
        extra: +rest[`${theId}-optionExtra`],
        choices: optionChoice,
      }  
    });
    createDishMutation({
      variables: {
        input: {
          name,
          price: +price,
          description,
          restaurantId: +restaurantId,
          options: optionObjects,
        },
      },
    });
    history.goBack();
  };
  const [options, setOptions] = useState<number[]>([]);
  const [choices, setChoices] = useState<{optionId: number, id: number}[]>([]);
  const onAddOptionClick = () => {
    setOptions((current) => [Date.now(), ...current]);
  };
  const onDeleteOptionClick = (idToDelete: number) => {
    setOptions((current) => current.filter(id => id !== idToDelete));
    setValue(`${idToDelete}-optionName`, "");
    setValue(`${idToDelete}-optionExtra`, "");
  };
  const onAddChoiceClick = (optionId: number) => {
    setChoices((current) => [{ optionId, id: Date.now() }, ...current ]);
  };
  const onDeleteChoiceClick = (optionId: number, choiceId: number) => {
    setChoices((current) => current.filter(choice => {
      return choice.id !== choiceId
    }));
    setValue(`${optionId}-${choiceId}-choiceName`, "");
    setValue(`${optionId}-${choiceId}-choiceExtra`, "");
  };
  return (
    <div className="container flex flex-col items-center mt-52">
      <Helmet>
        <title>Add Dish | Nuber Eats</title>        
      </Helmet>
      <h4 className="font-semibold text-2xl mb-3">Add Dish</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid max-w-screen-sm gap-3 mt-5 w-full mb-5"
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          ref={register({ required: "Name is required." })}  
        />
        <input
          className="input"
          type="number"
          name="price"
          min={0}
          placeholder="Price"
          ref={register({ required: "Price is required." })}  
        />
        <input 
          className="input"
          type="text"
          name="description"
          placeholder="Description"
          ref={register({ required: "Description is required." })}
        />
        <div className="my-10">
          <h4 className="font-medium mb-3 text-lg">Dish Options</h4>
          <span
            onClick={onAddOptionClick}
            className="cursor-pointer text-white bg-gray-900 py-1 px-2 mt-5 bg-"
          >
            Add Dish Option
          </span>
          {options.length !== 0 && 
            options.map((id) => (
              <div key={id} className="mt-5">
                <input 
                  ref={register}
                  name={`${id}-optionName`}
                  className="py-2 px-4 focus:outline-none mr-3 focus:border-gray-600 border-2"
                  type="text"
                  placeholder="Option Name"        
                />
                <input 
                  ref={register}
                  name={`${id}-optionExtra`}
                  className="py-2 px-4 focus:outline-none focus:border-gray-600 border-2"
                  type="number"
                  min={0}
                  defaultValue={0}
                  placeholder="Option Extra"  
                />
                <div className="inline-block">  
                  <button 
                    type="button"
                    onClick={() => onAddChoiceClick(id)}
                    className="cursor-pointer text-white bg-blue-700 py-1 px-2"
                  >
                    Add Dish Choice  
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-white bg-red-500 ml-3 py-1 px-2 mt-5 bg-" 
                    onClick={() => onDeleteOptionClick(id)}   
                  >
                    Delete Option
                  </button>                                
                </div>
                {choices.length !== 0 &&
                  choices.filter(choice => choice.optionId === id).map(choiceId => (
                    <div
                      key={choiceId.id}
                      className="mt-2 ml-10 flex flex-row items-center"
                    >                    
                      <input
                        ref={register}
                        className="py-2 px-4 focus:outline-none mr-3 focus:border-gray-600 border-2"
                        name={`${id}-${choiceId.id}-choiceName`}
                        type="text"
                        placeholder="Choice Name"
                      />
                      <input
                        ref={register}
                        className="py-2 px-4 focus:outline-none mr-3 focus:border-gray-600 border-2"
                        name={`${id}-${choiceId.id}-choiceExtra`}
                        type="number"
                        min={0}
                        defaultValue={0}
                        placeholder="Choice Extra"
                      />
                      <button
                        type="button"
                        onClick={() => onDeleteChoiceClick(id, choiceId.id)}
                        className="cursor-pointer text-white bg-red-700 py-1 px-2"
                      >
                        Remove Choice
                      </button>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        <Button 
          loading={loading}
          canClick={formState.isValid}
          actionText="Create Dish"
        />
      </form>
    </div>
  );
};
