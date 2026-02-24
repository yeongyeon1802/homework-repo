function isValidPassword(password) {
  switch (true) {
    case !password: //빈 문자
      return false;
    case password.length < 8: //8자 미만
      return false;
    case !/[a-zA-Z]/.test(password): //영문 미포함
      return false;
    case !/[0-9]/.test(password): // 숫자 미포함
      return false;
    case !/[^\w\s]/g.test(password): // 특수문자 미포함
      return false;
    default:
      return true;
  }
}

module.exports = { isValidPassword };
