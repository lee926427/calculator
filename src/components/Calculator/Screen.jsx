import clsx from 'clsx';

function Screen() {
  return (
    <header className={clsx('bg-stone-300 rounded-md', 'p-2 text-right')}>
      <h2 className="text-sm text-neutral-500 font-bold h-5">formula </h2>
      <h1 className="text-3xl font-bold">output</h1>
    </header>
  );
}
export default Screen;
