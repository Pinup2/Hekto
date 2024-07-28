import {
  
  Box,
  IconButton,
  Theme,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";

import { useListerContext } from "../../context/lister";

const styles = {
  formControl: {
    margin: (theme: Theme) => theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: (theme: Theme) => theme.spacing(2),
  },
};

const LayoutViewControls = () => {
  const { viewType, setViewType } = useListerContext();
  console.log({ viewType });
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={1}
    >
      <Box>
        <IconButton
          onClick={() => {
            // console.log("Switching to grid view");
            setViewType("grid");
          }}
          color={viewType === "grid" ? "primary" : "default"}
        >
          <GridViewIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            // console.log("Switching to list view");
            setViewType("list");
          }}
          color={viewType === "list" ? "primary" : "default"}
        >
          <ViewAgendaOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LayoutViewControls;
