import getConfig from 'next/config';

const { MY_VAR } = getConfig().publicRuntimeConfig;

function createThing() {
  if (typeof MY_VAR === 'undefined') throw new Error('MY_VAR is undefined');

  return MY_VAR;
}

export default createThing();
