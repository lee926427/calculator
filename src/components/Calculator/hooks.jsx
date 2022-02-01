import { useState, createContext, useEffect } from 'react';
import { calculate } from './logic';
import { local } from '@utils/storage';
const defaultState = {
  formular: null,
  output: '0',
  isShowFormular: true,
  hasResult: false,
};
const localComputeData = local('ComputeData');
export const actionTypes = {
  push: 'PUSH',
  clear: 'CLEAR',
  equal: 'EQUAL',
  output: 'OUTPUT',
};
export const CalcContext = createContext(null);

const numberKey = 'bg-slate-400 text-slate-800';
const symbolKey = 'bg-slate-600 text-slate-100';
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
    className: symbolKey,
  },
  {
    keyType: actionTypes.push,
    text: '*',
    className: symbolKey,
  },
  {
    keyType: actionTypes.push,
    text: '-',
    className: symbolKey,
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
    className: symbolKey + rowTwo,
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
    className: symbolKey + rowTwo,
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

function clacReducer(state) {
  const result = calculate(state.output);
  return {
    ...state,
    formular: state.output + '=',
    output: result,
    hasResult: true,
  };
}

function toggleFormular(state) {
  return { ...state, isShowFormular: !state.isShowFormular };
}

function outputReducer(state, key) {
  if (state.output[0] === '0') return { ...state, output: key };
  if (state.hasResult === true) return { ...state, hasResult: false, output: key, formular: null };
  return { ...state, output: state.output + key };
}

export function useCalculator() {
  const [calcState, setCalcState] = useState(defaultState);
  const actions = {
    clear: () => setCalcState(defaultState),
    equal: () => setCalcState(clacReducer),
    push: (key) => setCalcState((state) => outputReducer(state, key)),
    toggleOutput: () => setCalcState(toggleFormular),
  };

  useEffect(() => {
    const data = localComputeData.get();
    setCalcState({ ...defaultState, ...data });
  }, []);

  useEffect(() => {
    const { output, formular } = calcState;
    localComputeData.save({ output, formular });
  }, [calcState.output]);

  return { calcState, actions };
}
