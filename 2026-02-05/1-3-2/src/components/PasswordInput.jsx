export default function PasswordInput({ pw, setPw, pwConfirm, setPwConfirm }) {
  const pwValue = (e) => {
    setPw(e.target.value);
  };
  const confirmPwValue = (e) => {
    setPwConfirm(e.target.value);
  };
  return (
    <div className="password-box">
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={pw}
        onChange={pwValue}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={pwConfirm}
        onChange={confirmPwValue}
      />
    </div>
  );
}
