const gnar = 'gnarly';

const ifo = ({ file = __filename, dir = __dirname }) => (
  <p>
    {dir}:{file}
  </p>
);

switch (gnar) {
  default:
    console.log('gnarly');
    break;
}
