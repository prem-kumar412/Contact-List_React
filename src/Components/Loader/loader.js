import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        margin: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <BeatLoader color="#3B4B0B" />
      
    </div>
  );
};

export default Loader;
