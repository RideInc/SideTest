// скрипт извлекает данные из пришедшего кадра

//структура кадра
const frame = {
   recipient : 88.123.44.4,
   sender    : 410.212.23.23,
   type      : 'IPv4',
   data      : [],
   size      : 5054
 };

// извлекаем данные
const bruteForce = (frame) => {
  let count = frame.data.length;
  let i = 0;
  while (i < count) {

    console.log(frame.data[i]);

    i++;.
  };
};

// конвертация в 2-оичный код
const dec2bin = () => frame.toString(2);

// формирование и отправка отчёта
const sendReport = () => {
  let reportFrame = {
     recipient : frame.sender,
     sender    : frame.recipient,
     type      : 'IPv4',
     data      : [],
     size      : dec2bin.length
   };
  if (reportFrame.size < frame.size) {
    let msg = `error: was lost ${frame.size - reportFrame.size} bytes`;
    reportFrame.date.push(msg);
  } else {
    let msg = `frame was success delivered`;
  }

  send(msg)

}

// Какие-то очередные изменения
const key = () => {
  p = 521352353252352364325;
  b = 2;
  return Math.pow(p, b)
}


bruteForce(frame);
sendReport();
