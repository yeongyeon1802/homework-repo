export default function ProfileCard({ name, age, job }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "200px",
        height: "200px",
        padding: "16px",
        border: "1px solid #333",
        borderRadius: "16px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(255, 225, 243, 0.8) 0%, rgba(224, 195, 252, 0.6) 100%)",
        color: "#2D3436",
      }}
    >
      <h3 style={{ fontSize: "24px" }}>{name}</h3>
      <p style={{ fontSize: "20px" }}>나이 : {age}세</p>
      <p style={{ fontSize: "20px" }}>직업 : {job}</p>
    </div>
  );
}
