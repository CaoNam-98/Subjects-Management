const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    height: "100%",
    zIndex: 10, // giá trị càng cao thì nó càng nổi lên
    maxWidth: 240,
    position: "relative",
  },
  menuLink: {
    textDecoration: "none", // bỏ dấu gạch chân đường link
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    "&>div": {
      // style cho thẻ div bên ngoài như thế này
      backgroundColor: theme.color.hover,
    },
  },
});

export default styles;
