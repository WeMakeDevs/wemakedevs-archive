import clsx from 'clsx';

const Backdrop = ({
  className,
  isDarkBg = false,
  isTransparent = false,
  isBlur = false,
  isGradient = false,
  children,
  show = false,
  onClose,
}) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-content/20 transition-opacity',
        [
          isDarkBg && 'bg-content/20',
          isTransparent && 'bg-transparent',
          isBlur && 'supports-[backdrop-filter]:backdrop-blur-xl',
          isGradient &&
            'bg-primary/70 bg-gradient-to-b from-base-100 to-base-100/50',
          show
            ? 'pointer-events-auto visible opacity-100'
            : ' pointer-events-none invisible opacity-0  ',
        ],
        className
      )}
    >
      <div className='absolute inset-0 cursor-pointer' onClick={onClose} />
      {children}
    </div>
  );
};

export default Backdrop;
