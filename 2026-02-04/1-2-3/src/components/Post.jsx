export default function Post({ author, content }) {
  return (
    <div
      className="post"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "400px",
        height: "130px",
        padding: "16px",
        border: "1px solid #333",
        borderRadius: "16px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(255, 225, 243, 0.8) 0%, rgba(224, 195, 252, 0.6) 100%)",
        color: "#2D3436",
      }}
    >
      <h4 style={{ fontSize: "24px" }}>작성자 : {author}</h4>
      <p style={{ fontSize: "20px" }}>내용 : {content}</p>
    </div>
  );
}
