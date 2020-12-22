import CVE

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
  let output = [];
  while (i < count) {

    return frame.data[i]

    i++;
  };
};

const checkForce = (data) => {
  let i = 0;
  while (i < data.length) {

    if (data[i] in CVE) continue;
    else

    i++
  };
};

let force = bruteForce(frame); // извлекаем данные
checkForce(force); // проверяем данные
