const styles = (theme) => ({
  modal: {
    top: "50%", //
    left: "50%", // 3 cái này giúp nằm giữa màn hình
    transform: "translate(-50%, -50%)", //
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
    outline: "none", //đường kẻ nằm bên ngoài phần tử
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textColor,
    padding: theme.spacing(2),
    display: "flex", // giúp giữ nguyên ko dịch chuyển tham khảo ở trang flexbox google
    alignItems: "center", //
    justifyContent: "space-between", //  chia nó sang 2 bên
  },
  title: {
    color: theme.color.textColor,
    fontWeight: 700, // cho màu chữ đậm hơn
    fontSize: "20px",
  },
  content: {
    padding: theme.spacing(2),
  },
});

export default styles;
