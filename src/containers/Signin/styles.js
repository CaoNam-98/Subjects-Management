const styles = (theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: "flex", //
    flexDirection: "column", // cả 2 trục đều nằm giữa hết.
    alignItems: "center", // giúp căn giữa so với trục đứng
    justifyContent: "center", // giúp căn giữa so với trục ngang
    minHeight: "100vh", // để nó full màn hình
    textAlign: "center",
    flex: "1 0 auto",
  },
  signin: {
    width: 500,
  },
  paddingLeft: {
    marginLeft: -140,
  },
});

export default styles;
