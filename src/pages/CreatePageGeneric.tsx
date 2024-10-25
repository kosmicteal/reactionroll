import { Container, Paper, Text } from "@mantine/core";
import "./MainPage.css";
import { cx } from "@emotion/css";
import { styling } from "../style";
import { BasicContent } from "../components/BasicContent";

export function CreatePageGeneric() {
  return (
    <>
      <Paper
        visibleFrom="sm"
        className={cx(styling.paperBackground, styling.paperSize, styling.centerContainer)}
        withBorder
        shadow="md"
      >
        <BasicContent />
      </Paper>
      <Container
        hiddenFrom="sm"
      >
        <BasicContent />
      </Container>

    </>
  );
}
