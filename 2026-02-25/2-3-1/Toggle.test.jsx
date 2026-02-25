import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

describe("Toggle", () => {
  test("초기 상태: OFF", () => {
    render(<Toggle />);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
  test("클릭시 ON으로 변경", async () => {
    render(<Toggle />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("ON")).toBeInTheDocument();
  });
  test("다시 클릭 시 OFF로 변경", async () => {
    render(<Toggle />);

    const buttonClick = screen.getByRole("button");

    await userEvent.click(buttonClick);
    await userEvent.click(buttonClick);

    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
});
