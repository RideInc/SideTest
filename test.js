const frame = {
   recipient : 88.123.44.4,
   sender    : 410.212.23.23,
   type      : 'IPv4',
   data      : [],
   size      : 0
 };

const bruteForce = (frame) => {
  let count = frame.data.length;
  let i = 0;
  while (i < count) {

    console.log(frame.data[i]);

    i++;
  };

};

bruteForce(frame);
