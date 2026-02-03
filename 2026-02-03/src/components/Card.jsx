import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function Card() {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        width: "400px",
        height: "400px",
        padding: "32px",
        border: "1px solid #26C6DA",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #E0F7FA 0%, #80DEEA 100%)",
      }}
    >
      <CardHeader></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </div>
  );
}

export default Card;
