// скрипт извлекает данные из пришедшего кадра

//структура кадра
const frame = {
   recipient : 88.123.44.4,
   sender    : 410.212.23.23,
   type      : 'IPv4',
   data      : [],
   size      : 0
 };

// извлекаем данные
const bruteForce = (frame) => {
  let count = frame.data.length;
  let i = 0;
  while (i < count) {

    console.log(frame.data[i]);

    i++;
  };
};

const bitConvert = (frame) => {

  // преобразует кадр в двоичную систему изчисления

}

bruteForce(frame);
