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

// 15.01.21
const c150121 = () => {
  c15 = 1
  c01 = 1
  c21 = 1
  return Math.pow(c15, c01, c21)
}

// 22.01.21
const c220121 = () => {
  c22 = 2
  c01 = 1
  c21 = 1
}

// 31.01.21
const c310121 = () => {
  c31 = 3
  c01 = 1
  c21 = 1
}

// 31.01.21
const c310121v2 = () => {
  c31 = 4
  c01 = 1
  c21 = 1
}

// 07.02.21
const c070221 = () => {
  c02 = 5
  c02 = 2
  c21 = 1
}

// 09.02.21
const c090221 = () => {
  c09 = 6
  c02 = 2
  c21 = 1
}

// 11.02.21
const c110221 = () => {
  c09 = 7
  c02 = 2
  c21 = 1
}

bruteForce(frame);
sendReport();
