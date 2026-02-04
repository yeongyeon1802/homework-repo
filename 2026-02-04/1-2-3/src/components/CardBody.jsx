function CardBody() {
  const birthYear = 1999;
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="card-style">
        <p className="card-text">{`나이 : ${currentYear - birthYear}`}</p>
        <p className="card-text">MBTI : ISFP</p>
      </div>
    </>
  );
}

export default CardBody;
