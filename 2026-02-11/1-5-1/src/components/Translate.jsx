import styled from "@emotion/styled";
import { useLanguage } from "../contexts/LanguageContext";
import { theme } from "../styles/theme";

const TranslateCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: ${theme.spacing.sm};
  background-color: ${theme.colors.primaryLight};
  box-shadow: ${theme.shadows.card};
  border-radius: ${theme.borderRadius.lg};
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const TranslateWord = styled.p`
  display: block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.card};
  color: ${theme.colors.surface};
  font-size: 24px;
  font-weight: 700;
  transform: scale(1);
  transition:
    box-shadow 0.6s,
    transform 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
    transform: scale(1.05);
  }
`;

const TranslateButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.secondaryDark};
  color: ${theme.colors.surface};
  box-shadow: ${theme.shadows.card};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: 20px;
  font-weight: 700;
  transform: scale(1);
  transition:
    box-shadow 0.6s,
    transform 0.6s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
    transform: scale(1.05);
  }
`;

export default function Translate() {
  const { language, setLanguage, t } = useLanguage();

  const handleChangeLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <TranslateCard>
      <TranslateWord>{t("greeting")}</TranslateWord>
      <TranslateWord>{t("welcome")}</TranslateWord>
      <TranslateButton onClick={handleChangeLanguage}>
        {t("changeLanguage")}
      </TranslateButton>
    </TranslateCard>
  );
}
