import { ItunesDataType } from "../../types/itunes.type";
import playIcon from "../../assets/playIcon.svg";
import dollarIcon from "../../assets/dollarIcon.svg";

const Card = ({ data }: { data: ItunesDataType }) => {
  return (
    <div style={{
      width: "100%",
      padding: "12px 12px 11px 10px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
      backgroundColor: "#fff",
      display: "flex",
      marginTop: "15px",
    }}>
      <div style={{
        position: "relative",
        height: "100px",
        width: "100px",
        flexShrink: 0,
        marginRight: "12px",
        borderRadius: "10px",
      }}>
        <img src={data?.artworkUrl60} alt="thumbnail" style={{
          objectFit: "cover",
          borderRadius: '10px',
          width: "100%",
          height: "100%",
        }} />
        <img src={playIcon} alt="playIcon" style={{
          position: "absolute",
          borderRadius: '10px',
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }} />
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}>
        <h2 style={{
          fontFamily: "Roboto",
          letterSpacing: "0.36px",
          fontSize: "10px",
          fontWeight: 500,
        }}>{data?.artistName || ''}</h2>
        <h3 style={{
          fontFamily: "Roboto",
          marginTop: "5px",
          letterSpacing: "0.5px",
          fontSize: "14px",
          fontWeight: "bold",
          width: "125px",
        }}>{data?.trackCensoredName || ''}</h3>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          width: "100%",
        }}>
          <div style={{
            borderRadius: "10px",
            fontSize: "10px",
            backgroundColor: "#10b981",
            fontFamily: "Roboto",
            letterSpacing: "0.36px",
            fontWeight: 500,
            color: "#ffffff",
            padding: "4px 13px",
          }}>{data?.primaryGenreName || ''}</div>
          {data?.trackPrice && (
            <div style={{
              display: "flex",
              alignItems: "center",
            }}>
              <img src={dollarIcon} alt="dollar" style={{
                marginRight: "6px",
              }} />
              <span style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "0.43px",
                color: "#f5b014",
              }}>{data?.trackPrice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
