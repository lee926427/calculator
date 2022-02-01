import { useRef } from 'react';
import clsx from 'clsx';
import Screen from './Screen';
import Keyboard from './Keyboard';
import { useCalculator, CalcContext } from './hooks';

function Calculator() {
  const { calcState, actions } = useCalculator();

  return (
    <div className={clsx('w-full h-full max-h-1/2', 'md:w-1/5 md:h-full', 'lg:w-1/6')}>
      <main className="flex flex-col gap-8 p-4 bg-slate-200 rounded-sm shadow-sm">
        <CalcContext.Provider value={{ calcState, actions }}>
          <Screen />
          <Keyboard />
        </CalcContext.Provider>
      </main>
    </div>
  );
}

export default Calculator;
