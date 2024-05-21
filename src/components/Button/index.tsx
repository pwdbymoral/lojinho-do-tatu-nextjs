import React from 'react';

/**
 * Button component props.
 */
interface ButtonProps {
  /**
   * Function to be called when the button is clicked.
   */
  onClick?: () => void;
  /**
   * The child elements to be rendered inside the button.
   */
  children: React.ReactNode;
}

/**
 * Renders a button component with the provided onClick function and children.
 */
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button text-md rounded-lg bg-primary px-4 py-2 text-neutral-white md:hover:bg-accent"
    >
      {children}
    </button>
  );
};

export default Button;
