const { isValidPassword } = require("./password");

describe("비밀번호 테스트", () => {
  describe("정상 케이스", () => {
    test("모든 조건 일치", () => {
      expect(isValidPassword("Password123!@#")).toBe(true);
    });
  });
  describe("실패 케이스", () => {
    test("빈 문자열", () => {
      expect(isValidPassword("")).toBe(false);
    });
    test("8자 미만", () => {
      expect(isValidPassword("Pass1")).toBe(false);
    });
    test("숫자 없음", () => {
      expect(isValidPassword("Password!@#")).toBe(false);
    });
    test("영문 없음", () => {
      expect(isValidPassword("12345678!@#")).toBe(false);
    });
    test("특수문자 없음", () => {
      expect(isValidPassword("Password123")).toBe(false);
    });
  });
});
