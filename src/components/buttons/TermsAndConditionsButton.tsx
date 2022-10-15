import { FC, MouseEventHandler } from "react";

interface TermsAndConditionsButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const TermsAndConditionsButton: FC<TermsAndConditionsButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      className="btn btn-info"
      style={{ width: "300px", marginTop: "30px" }}
      onClick={onClick}
    >
      Ver Terminos y condiciones
    </button>
  );
};

export default TermsAndConditionsButton;
