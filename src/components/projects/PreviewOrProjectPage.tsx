import React from "react";
import calculateHasLaunched from "../../helpers/calculateHasLaunched";
import calculateTimeLeft from "../../helpers/calculateTimeLeft";

interface PreviewOrProjectPage {
  launchDate: string;
  ProjectPage: React.FC;
  PreviewPage: React.FC<{ launchDate: string }>;
}

const PreviewOrProjectPage = ({
  launchDate,
  ProjectPage,
  PreviewPage,
}: PreviewOrProjectPage) => {
  const timeLeft = calculateTimeLeft(launchDate);
  const hasLaunched = calculateHasLaunched(timeLeft);

  return hasLaunched ? (
    <ProjectPage />
  ) : (
    <PreviewPage launchDate={launchDate} />
  );
};

export default PreviewOrProjectPage;
