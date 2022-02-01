export const actionTypes = {
  push: 'PUSH',
  clear: 'CLEAR',
  equal: 'EQUAL',
  output: 'OUTPUT',
};

const numberKey = 'bg-slate-400 text-slate-800';
const operationKey = 'bg-slate-600 text-slate-100';
const rowTwo = ' row-span-2';
const colTwo = ' col-span-2';
const clearKey = 'bg-red-800 text-slate-200 font-bold';

export const keys = [
  {
    keyType: actionTypes.output,
    text: 'f(x)',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '/',
    className: operationKey,
  },
  {
    keyType: actionTypes.push,
    text: '*',
    className: operationKey,
  },
  {
    keyType: actionTypes.push,
    text: '-',
    className: operationKey,
  },
  {
    keyType: actionTypes.push,
    text: '7',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '8',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '9',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '+',
    className: operationKey + rowTwo,
  },
  {
    keyType: actionTypes.push,
    text: '4',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '5',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '6',
    className: numberKey,
  },

  {
    keyType: actionTypes.push,
    text: '1',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '2',
    className: numberKey,
  },
  {
    keyType: actionTypes.push,
    text: '3',
    className: numberKey,
  },
  {
    keyType: actionTypes.equal,
    text: '=',
    className: operationKey + rowTwo,
  },
  {
    keyType: actionTypes.push,
    text: '0',
    className: numberKey + colTwo,
  },
  {
    keyType: actionTypes.clear,
    text: 'C',
    className: clearKey,
  },
];
