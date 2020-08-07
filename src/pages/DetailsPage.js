import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import recipes from '../recipes';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 20px;
  padding-left: 50px;

  .title {
    font-size: 60px;
    font-weight: bolder;
  }

  .description {
    font-size: 30px;
  }

  .items-title {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const DetailsPage = React.memo(() => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const tokenizedUrl = window.location.pathname.split('/');
    const itemId = tokenizedUrl[tokenizedUrl.length - 1];
    const {data} = recipes;
    data.forEach((i) => i.id == itemId && setItem(i));
  }, []);

  if (!item) return <></>;
  return (
    <Wrapper>
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>
      <div className="items-title">Steps:</div>
      <div className="steps">
        {item.steps.map((s, idx) => (
          <div key={`step-${s}`}>
            {idx}. {s}
          </div>
        ))}
      </div>
      <div className="items-title">Ingredients:</div>
      <div>
        {item.ingredients.map((i, idx) => (
          <div key={`ing-${i}`}>
            {idx}. {i}
          </div>
        ))}
      </div>
      <img src={item.coverImgUrl} width="50%" />
    </Wrapper>
  );
});
