const styles = () => ({
  globalLoading: {
    position: "fixed", // Định vị và giúp cho phần tử luôn cố định một chỗ, ví dụ như khi bạn scroll trình duyệt chẳng hạn, phần tử sẽ không thay đổi.
    left: 0, //
    right: 0, // toàn màn hình luôn đi cùng position
    top: 0, //
    bottom: 0, //
    zIndex: 99,
    background: "rgba(0, 0, 0, 0.4)", // màu đen với opacity : 0.4
  },
  icon: {
    position: "fixed", // Định vị và giúp cho phần tử luôn cố định một chỗ, ví dụ như khi bạn scroll trình duyệt chẳng hạn, phần tử sẽ không thay đổi.
    left: 0, //
    right: 0, // 4 cái giúp nằm ở giữa màn hình
    marginLeft: "auto", //
    marginRight: "auto", //
    top: "40%", // cách top 40% màn hình
    width: 100,
  },
});

export default styles;
