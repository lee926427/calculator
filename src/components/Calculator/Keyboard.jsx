import clsx from 'clsx';

export function Key({ className = 'bg-slate-800 text-slate-200', text, onClick }) {
  return (
    <span
      className={clsx(className, 'rounded-md p-2 text-center cursor-pointer shadow-sm')}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

function Keyboard({ keys }) {
  return <div className={clsx('grid grid-rows-5 grid-cols-4 gap-2', 'text-slate-600')}>{keys}</div>;
}
export default Keyboard;
