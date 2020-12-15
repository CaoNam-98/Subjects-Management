// Dùng để truyền cho theme trong các style trong các components có thể gọi
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#7C4DFF",
    error: "#E64A19",
  },
  typoraphy: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#D32F2F",
    textColor: "#FFFFFF",
  },
});

export default theme;
