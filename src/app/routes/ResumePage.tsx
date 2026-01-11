import Resume from "../../assets/Micah_Woodard_Resume_2025.pdf";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

export const ResumePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 0,
        paddingBottom: "141%",
        position: "relative",
      }}
    >
      <Button
        component="a"
        href={Resume}
        download
        variant="filled"
        style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}
      >
        {<IconDownload />}
      </Button>
      <iframe
        src={`${Resume}#toolbar=0&navpanes=0&scrollbar=0`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Resume"
      />
    </div>
  );
};
