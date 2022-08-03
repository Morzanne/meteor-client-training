import { MeteorContext } from '../context';
import { createElement } from 'react';
import { useConnection } from '../useConnection';

export const MeteorProvider = ({ endpoint, children }) => {

  const server = useConnection(endpoint);
  const provider = createElement(MeteorContext.Provider, { value: server }, children);

  return provider;
};