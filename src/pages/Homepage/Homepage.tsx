import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import logoIcon from "../../assets/logoIcon.svg";

const Homepage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onSearch = (e: any) => {
    e.preventDefault();
    if (value) navigate(`/search/${encodeURIComponent(value)}`);
  };

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
      boxSizing: "border-box",
      padding: "30px 26px",
      alignItems: "center",
      flexDirection: "column",
      backgroundImage: "linear-gradient(153deg, #712bda, #a45deb 100%)",
    }}>
      <div style={{ flexGrow: 1, display: "flex" }}>
        <img src={logoIcon} alt="logoIcon" />
      </div>
      <form onSubmit={onSearch} style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <input
          type="text"
          name="search"
          placeholder="Artist / Album / Title"
          onChange={onChangeSearch}
          style={{ width: "100%", height: "40px", borderRadius: "20px", border: "none", textAlign: "center" }}
        />
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Homepage;
