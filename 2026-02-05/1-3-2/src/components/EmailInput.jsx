export default function EmailInput({
  email,
  emailChange,
  emailMsg,
  handleCheck,
}) {
  return (
    <div className="email-box">
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={emailChange}
      />
      <button type="button" onClick={handleCheck}>
        중복 검사
      </button>
      {}
      {emailMsg && <p className="message">{emailMsg}</p>}
    </div>
  );
}
