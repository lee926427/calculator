import clsx from 'clsx';
import Screen from './Screen';
import Keyboard, { Key } from './Keyboard';
import { useCalculator } from './hooks';

const numberKey = 'bg-slate-400 text-slate-800';
const symbolKey = 'bg-slate-600 text-slate-100';
const rowTwo = ' row-span-2';
const colTwo = ' col-span-2';
const clearKey = 'bg-red-800 text-slate-200 font-bold';

function Calculator() {
  const {
    calcState: { output, formular, isShowFormular },
    actions: { push, equal, clear, toggleOutput },
  } = useCalculator();

  const keys = [
    {
      text: 'f(x)',
      className: numberKey,
      onClick: toggleOutput,
    },
    {
      text: '/',
      className: symbolKey,
      onClick: () => push('/'),
    },
    {
      text: '*',
      className: symbolKey,
      onClick: () => push('*'),
    },
    {
      text: '-',
      className: symbolKey,
      onClick: () => push('-'),
    },
    {
      text: '7',
      className: numberKey,
      onClick: () => push('7'),
    },
    {
      text: '8',
      className: numberKey,
      onClick: () => push('8'),
    },
    {
      text: '9',
      className: numberKey,
      onClick: () => push('9'),
    },
    {
      text: '+',
      className: symbolKey + rowTwo,
      onClick: () => push('+'),
    },
    {
      text: '4',
      className: numberKey,
      onClick: () => push('4'),
    },
    {
      text: '5',
      className: numberKey,
      onClick: () => push('5'),
    },
    {
      text: '6',
      className: numberKey,
      onClick: () => push('6'),
    },

    {
      text: '1',
      className: numberKey,
      onClick: () => push('1'),
    },
    {
      text: '2',
      className: numberKey,
      onClick: () => push('2'),
    },
    {
      text: '3',
      className: numberKey,
      onClick: () => push('3'),
    },
    {
      text: '=',
      className: symbolKey + rowTwo,
      onClick: equal,
    },
    {
      text: '0',
      className: numberKey + colTwo,
      onClick: () => push('0'),
    },
    {
      text: 'C',
      className: clearKey,
      onClick: clear,
    },
  ];

  const keyButtons = keys.map((keyProperties) => (
    <Key key={keyProperties.text} {...keyProperties} />
  ));

  return (
    <div className={clsx('w-full h-full max-h-1/2', 'md:w-1/5 md:h-full', 'lg:w-1/6')}>
      <main className="flex flex-col gap-8 p-4 bg-slate-200 rounded-sm shadow-sm">
        <Screen output={output} formular={formular} showFormular={isShowFormular} />
        <Keyboard keys={keyButtons} />
      </main>
    </div>
  );
}

export default Calculator;
