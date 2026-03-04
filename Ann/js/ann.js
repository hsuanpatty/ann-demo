  $(document).ready(function () {
        function adjustSubMenu() {
          const windowWidth = $(window).width();

          /* =========================
          桌面 / 平板版 margin-top + header top 動態計算
          ========================== */
          if (windowWidth >= 1200) {
            // 桌面 ≥ 1200
            if ($("#announcement-bar").is(":visible")) {
              $(".sub_menu").stop(true, true).animate({ marginTop: "70px" }, 200);
              $("#header").stop(true, true).animate({ top: "48px" }, 200);
            } else {
              $(".sub_menu").stop(true, true).animate({ marginTop: "22px" }, 200);
              $("#header").stop(true, true).animate({ top: "0" }, 200);
            }
          } else if (windowWidth >= 992) {
            // 平板 992 ~ 1199
            if ($("#announcement-bar").is(":visible")) {
              $(".sub_menu").stop(true, true).animate({ marginTop: "58px" }, 200);
              $("#header").stop(true, true).animate({ top: "48px" }, 200);
            } else {
              $(".sub_menu").stop(true, true).animate({ marginTop: "22px" }, 200);
              $("#header").stop(true, true).animate({ top: "0" }, 200);
            }
          } else if (windowWidth >= 798) {
            // 平板/小桌 798 ~ 991
            if ($("#announcement-bar").is(":visible")) {
              $(".sub_menu").stop(true, true).animate({ marginTop: "58px" }, 200);
              $("#header").stop(true, true).animate({ top: "48px" }, 200);
            } else {
              $(".sub_menu").stop(true, true).animate({ marginTop: "8px" }, 200);
              $("#header").stop(true, true).animate({ top: "0" }, 200);
            }
          } else {
            // 手機板 <798px
            if ($("#announcement-bar").is(":visible")) {
              $(".sub_menu").stop(true, true).animate({ marginTop: "58px" }, 200);
              $("#header").stop(true, true).css("position", "fixed").animate({ top: "60px" }, 200);
            } else {
              $(".sub_menu").stop(true, true).animate({ marginTop: "8px" }, 200);
              $("#header").stop(true, true).css("position", "fixed").animate({ top: "0" }, 0);
            }
          }

          /* =========================
       手機板 pushy-right（不改 sub_menu）
    ========================== */
          if (windowWidth <= 1199) {
            let pushyHeight = "100%";
            let pushyMargin = 0;

            if (windowWidth <= 575) {
              pushyHeight = $("#announcement-bar").is(":visible") ? "auto" : "100%";
              pushyMargin = $("#announcement-bar").is(":visible") ? 62 : 0;
            } else {
              pushyHeight = $("#announcement-bar").is(":visible") ? "auto" : "100%";
              pushyMargin = $("#announcement-bar").is(":visible") ? 51 : 0;
            }

            $(".pushy-right")
              .css({
                bottom: 0,
                overflowY: "auto",
                position: "fixed",
                height: pushyHeight,
              })
              .stop(true, true)
              .animate({ top: pushyMargin + "px" }, 200);
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
          $("#announcement-bar").slideUp(300, function () {
            adjustSubMenu(); // 會讓 header top 動畫回 0
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