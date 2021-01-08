const styles = (theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row", // làm cho sidebar và content nằm dọc màn hình
    height: "100vh", // ***
  },
  wrapperContent: {
    width: "100%",
    padding: 10,
    transition: theme.transitions.create("margin", {
      // truyền "margin" vì mình muốn mình muốn nó apply vào thuộc tính margin của css
      easing: theme.transitions.easing.sharp, // Material UI Amination
      duration: theme.transitions.duration.leavingScreen, //
    }),
  },
  shiftLeft: {
    marginLeft: -240,
    transition: theme.transitions.create("margin", {
      // truyền "margin" vì mình muốn mình muốn nó apply vào thuộc tính margin của css
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

export default styles;
