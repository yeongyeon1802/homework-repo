function CardFooter() {
  const hobbies = ["코딩", "음악", "게임"];
  return (
    <>
      <footer className="card-style card-text">{`취미 : ${hobbies.join(", ")}`}</footer>
    </>
  );
}

export default CardFooter;
