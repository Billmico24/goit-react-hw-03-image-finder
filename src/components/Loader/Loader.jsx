import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import {Wrapper} from './Loader.styled'

export const Loader = () => {
  return (
    <Wrapper >
         <MutatingDots 
            height="100"
            width="100"
            color="#3f51b5"
            secondaryColor= '#3f70b5'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
        />
    </Wrapper>
  );
};
