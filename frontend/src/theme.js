import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  // Customize MU theme properties here;
  // check default theme here https://material-ui.com/customization/default-theme/#default-theme;
  mixins: {
    appBar: {
      height: 80,
    },
  },
});
