import { useState } from "react";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import "./App.css";

function App() {
  //이메일 상태관리
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  //비밀번호 상태관리
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const isMismatch = pw !== "" && pwConfirm !== "" && pw !== pwConfirm;

  //약관 동의 상태관리
  const [isAgreed, setIsAgreed] = useState(false);
  const agreedCheck = () => setIsAgreed(!isAgreed);

  const emailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailChecked(false); //이메일 수정 시 중복검사 진행 초기화
    setEmailMsg(""); //메세지도 같이 초기화
  };

  //이메일 유효성 및 중복 검사
  const handleCheck = () => {
    if (!email.includes("@")) {
      setEmailMsg("올바른 이메일 형식이 아닙니다. (예: user@test.com)");
      return;
    }

    if (email === "user@test.com") {
      setEmailMsg("이미 사용 중입니다.");
      setIsEmailChecked(false);
    } else {
      setEmailMsg("사용할 수 있는 이메일입니다.");
      setIsEmailChecked(true);
    }
  };
  //가입하기 버튼 로직
  const signUpinValid = !isEmailChecked || !pw || pw !== pwConfirm || !isAgreed;
  const confirmSignUp = () => alert("회원가입 성공!");
  return (
    <>
      <div className="container">
        <h1>회원 가입</h1>
        <hr />
        <EmailInput
          email={email}
          emailChange={emailChange}
          emailMsg={emailMsg}
          handleCheck={handleCheck}
        />
        <PasswordInput
          pw={pw}
          setPw={setPw}
          pwConfirm={pwConfirm}
          setPwConfirm={setPwConfirm}
        />
        {isMismatch && <span>비밀번호가 일치하지 않습니다.</span>}
        <div className="footer">
          <label>
            <input
              className="agree-check"
              type="checkbox"
              checked={isAgreed}
              onChange={agreedCheck}
            />
            약관에 동의합니다.
          </label>
          <button
            className="sign-in-button"
            disabled={signUpinValid}
            onClick={confirmSignUp}
          >
            가입하기
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
