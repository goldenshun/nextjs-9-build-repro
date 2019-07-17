import thing from '../lib/createThing';

const Index = () => (
  <div>{`Thing: ${thing}`}</div>
);

// Arbitrarily disable prender for example purposes.
Index.getInitialProps = () => ({ blah: 'blah' });

export default Index;
