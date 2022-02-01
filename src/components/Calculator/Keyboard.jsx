import { actionTypes } from './hooks';
import clsx from 'clsx';

import { keys } from './hooks';

function Key({ className, text }) {
  return (
    <span className={clsx(className, 'rounded-md p-2 text-center cursor-pointer shadow-sm')}>
      {text}
    </span>
  );
}

function Button({ keyType, text, className = 'bg-slate-800 text-slate-200' }) {
  switch (keyType) {
    case actionTypes.output:
      return <Key className={className} text={text} />;

    case actionTypes.clear:
      return <Key className={className} text={text} />;

    case actionTypes.push:
      return <Key className={className} text={text} />;

    case actionTypes.equal:
      return <Key className={className} text={text} />;

    default:
      return <Key className={className} text={text} />;
  }
}

function Keyboard() {
  const keyboard = keys.map((keyProperties) => (
    <Button key={keyProperties.text} {...keyProperties} />
  ));
  return (
    <div className={clsx('grid grid-rows-5 grid-cols-4 gap-2', 'text-slate-600')}>{keyboard}</div>
  );
}
export default Keyboard;
