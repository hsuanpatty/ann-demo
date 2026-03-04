$(document).ready(function () {
  function adjustSubMenu() {
    const windowWidth = $(window).width();
    const isNotice = $("#announcement-bar").is(":visible");

    // =========================
    // 桌面 / 平板 marginTop & header top
    // =========================
    let subMenuMargin = 8;
    let headerTop = 0;

    if (windowWidth >= 1200) { // 桌面
      subMenuMargin = isNotice ? 70 : 22;
      headerTop = isNotice ? 48 : 0;
    } else if (windowWidth >= 992) { // 平板大
      subMenuMargin = isNotice ? 58 : 22;
      headerTop = isNotice ? 48 : 0;
    } else if (windowWidth >= 769) { // 平板小
      subMenuMargin = isNotice ? 58 : 8;
      headerTop = isNotice ? 48 : 0;
    } else { // 手機板 <769px
      subMenuMargin = isNotice ? 70 : 20;
      headerTop = isNotice ? 60 : 0;
    }

    $(".sub_menu").stop(true, true).animate({ marginTop: subMenuMargin + "px" }, 100);
    $("#header").stop(true, true).css("position", "fixed").animate({ top: headerTop + "px" }, 100);

    // =========================
    // 手機 pushy-right
    // =========================
    if (windowWidth <= 1199) {
      let pushyHeight = "100%";
      let pushyMargin = 0;

      if (windowWidth <= 375) {
           pushyHeight = isNotice ? "auto" : "100%";
        pushyMargin = isNotice ? 63 : 0;
      } else if (windowWidth <= 425) {
           pushyHeight = isNotice ? "auto" : "100%";
        pushyMargin = isNotice ? 64 : 0;
      } else if (windowWidth <= 575) {
           pushyHeight = isNotice ? "auto" : "100%";
        pushyMargin = isNotice ? 60 : 0;
      } else if (windowWidth <= 769) {
           pushyHeight = isNotice ? "auto" : "100%";
        pushyMargin = isNotice ? 60 : 0;
      } else { // 770 ~ 1199
           pushyHeight = isNotice ? "auto" : "100%";
        pushyMargin = isNotice ? 70 : 0;
      }

      $(".pushy-right")
        .css({
          bottom: 0,
          overflowY: "auto",
          position: "fixed",
          height: pushyHeight
        })
        .stop(true, true)
        .animate({ top: pushyMargin + "px" }, 350);
    } else {
      $(".pushy-right").css({
        top: "",
        bottom: "",
        overflowY: "",
        position: "",
        height: "",
      });
    }
  }

  // 初始載入
  adjustSubMenu();

  // 移除 nav-bg 陰影
  $(".nav-bg").css("box-shadow", "none");

  // 關閉公告
  $("#close-bar").on("click", function () {
    $("#announcement-bar").slideUp(100, function () {
      adjustSubMenu(); // header top 立刻回 0
    });
  });

  // 公告動態開啟/收起
  $("#announcement-bar").on("slideDown slideUp", function () {
    adjustSubMenu();
  });

  // 點開手機選單時，也重新調整
  $(".menu-btn, .pushy-open-right .pushy").on("click", function () {
    adjustSubMenu();
  });

  // 瀏覽器 resize 時也調整
  $(window).on("resize", function () {
    adjustSubMenu();
  });
});
