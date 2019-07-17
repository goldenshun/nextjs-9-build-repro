import getConfig from 'next/config';

console.log('publicRuntimeConfig', getConfig().publicRuntimeConfig);

const Index = () => (
  <div>Welcome to nextjs-9-build-repro</div>
);

export default Index;
