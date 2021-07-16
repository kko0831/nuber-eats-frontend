import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useHistory, useLocation } from "react-router-dom";
import { Pagination } from "../../components/pagination";
import { Restaurant } from "../../components/restaurant";
import { RESTAURANT_FRAGMENT } from "../../fragments";
import {
  searchRestaurant,
  searchRestaurantVariables,
} from "../../__generated__/searchRestaurant";

const SEARCH_RESTAURANT = gql`
  query searchRestaurant($input: SearchRestaurantInput!) {
    searchRestaurant(input: $input) {
      ok
      error
      totalPages
      totalResults
      restaurants {
        ...RestaurantParts
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const Search = () => {
  const [page, setPage] = useState(1);
  const onNextPageClick = () => setPage((current) => current + 1);
  const onPrevPageClick = () => setPage((current) => current - 1);
  const location = useLocation();
  const history = useHistory();
  const [callQuery, { loading, data, called }] = useLazyQuery<
    searchRestaurant,
    searchRestaurantVariables
  >(SEARCH_RESTAURANT);
  useEffect(() => {
    const [_, query] = location.search.split("?term=");
    if (!query) {
      return history.replace("/");
    }
    callQuery({
      variables: {
        input: {
          page: 1,
          query,
        },
      },
    });
  }, [history, location]);
  console.log(loading, data, called);
  return (
    <div>
      <Helmet>
        <title>
          {`Search Term: ${location.search.split("?term=")[1]}`} | Nuber Eats
        </title>
      </Helmet>
      {!loading && (
        <div className="max-w-screen-2xl pb-20 mx-auto">
          <h1 className="text-2xl font-medium">{`Search Term: ${
            location.search.split("?term=")[1]
          }`}</h1>
          <h2 className="text-base my-2">{`Result: ${data?.searchRestaurant.totalResults} Restaurants`}</h2>
          <div className="grid md:grid-cols-3 gap-x-5 gap-y-10">
            {data?.searchRestaurant.restaurants?.map((restaurant) => (
              <Restaurant
                key={restaurant.id}
                id={restaurant.id + ""}
                coverImg={restaurant.coverImg}
                name={restaurant.name}
                categoryName={restaurant.category?.name}
              />
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={data?.searchRestaurant.totalPages}
            onNextPageClick={onNextPageClick}
            onPrevPageClick={onPrevPageClick}
          />
        </div>
      )}
    </div>
  );
};
