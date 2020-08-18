import * as React from 'react';
 import '../../style/tailwind.scss';
//  import '../../style/index.scss';

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  onClick = () => {},
  disabled = false,
  type = 'submit',
  color = '',
  dataTestId = 'button',
}) => {

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    type,
    onClick: handleClick,
    disabled,
    'data-testid': dataTestId,
  };

  return (
    <div>
      <div>
        <button className='btn-blue' {...rootProps}>
          <span>{children}</span>
        </button>
      </div>
      <style jsx>{`
        .btn-blue {
          @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
        }
        .btn-blue:hover {
          @apply bg-blue-700;
        }
     `}</style>
    </div>
  );
};

export default Button;
