import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import closeIcon from "../../assets/closeIcon.svg";

const Modal = ({ onClose }: { onClose: Function }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) navigate(`/search/${encodeURIComponent(value)}`);
  };

  return (
    <div style={{
      zIndex: 1,
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(28, 28, 45, 0.9)",
    }}>
      <button
        style={{
          background: "unset",
          border: "none",
          position: "absolute",
          right: "12px",
          top: "18px",
        }}
        onClick={() => onClose()}
      >
        <img src={closeIcon} alt="closeIcon" />
      </button>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "30px",
        flexDirection: "column",
      }}>
        <h2 style={{
          marginBottom: "31px",
          fontFamily: "Roboto",
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "0.71px",
          color: "#ffffff",
        }}>Search</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="search"
            placeholder="Artist / Album / Title"
            onChange={onSearchChange}
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "20px",
              border: "none",
              textAlign: "center",
            }}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
