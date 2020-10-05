import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
    color: var(--black);
  }
`;

export default function BeersPage({ data, pageContext }) {
  const beers = data.beers.nodes;
  return (
    <>
      <h2 className="center">
        We have {beers.length} Beers Available. Dine in Only!
      </h2>
      <BeerGridStyles>
        {beers.map((beer) => {
          const rating = Math.round(beer.rating.average);

          return (
            <SingleBeerStyles>
              <h3>{beer.name}</h3>
              <img src={beer.image} alt={beer.name} />
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {`⭐️`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐️`.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
