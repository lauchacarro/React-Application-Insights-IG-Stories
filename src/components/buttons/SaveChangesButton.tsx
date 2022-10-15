import { FC, MouseEventHandler } from "react";

interface SaveChangesButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SaveChangesButton: FC<SaveChangesButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      style={{ width: "300px", marginTop: "30px" }}
      onClick={onClick}
    >
      Guardar Cambios
    </button>
  );
};

export default SaveChangesButton;
