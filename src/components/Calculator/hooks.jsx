import { useState, createContext, useEffect } from 'react';
import { calculate } from './logic';
import { local } from '@utils/storage';

const defaultState = {
  formular: null,
  output: '0',
  isShowFormular: true,
  hasResult: false,
};

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

function useLocalStorage(key, state, setter) {
  const localComputeData = local(key);
  useEffect(() => {
    const payload = localComputeData.get();
    setter(payload);
  }, []);

  useEffect(() => {
    localComputeData.save(state);
  }, [state]);
}

export function useCalculator() {
  const [calcState, setCalcState] = useState(defaultState);
  useLocalStorage('ComputeData', calcState, setCalcState);
  const actions = {
    clear: () => setCalcState(defaultState),
    equal: () => setCalcState(clacReducer),
    push: (key) => setCalcState((state) => outputReducer(state, key)),
    toggleOutput: () => setCalcState(toggleFormular),
  };

  return { calcState, actions };
}
