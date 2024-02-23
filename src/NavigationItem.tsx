export function NavigationItem({
  text,
  isSelected,
  onClick,
}: {
  text: string;
  isSelected: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={
        'relative flex cursor-pointer select-none justify-center rounded-sm px-2 after:absolute after:-bottom-2' +
        (isSelected ? " after:content-['.']" : ' text-neutral-400')
      }
    >
      {text}
    </div>
  );
}
