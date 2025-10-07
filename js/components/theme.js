// www/js/components/theme.js

export function ThemeComponent() {
  return {
    // --- State ---
    currentTheme: localStorage.getItem("theme") || "auto",
    currentStyle: localStorage.getItem("f7style") || "md",
    fontSize: Number(localStorage.getItem("fontSize")) || 12, // 默认12，表示“默认”

    // --- Methods ---
    initTheme() {
      this.applyTheme(this.currentTheme);
      this.updateFontSize();
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (this.currentTheme === "auto") {
            this.setTheme("auto");
          }
        });
    },

    setTheme(theme) {
      this.currentTheme = theme;
      localStorage.setItem("theme", theme);
      this.applyTheme(theme);
    },

    setStyle(style) {
      this.currentStyle = style;
      localStorage.setItem("f7style", style);
      window.location.reload();
    },

    applyTheme(theme) {
      const appEl = document.querySelector(".framework7-root");
      if (!appEl) return;
      let themeToApply = theme;
      if (theme === "auto") {
        themeToApply = this.getSystemTheme();
      }
      if (themeToApply === "dark") {
        appEl.classList.add("dark");
        setStatusBar("DARK");
      } else {
        appEl.classList.remove("dark");
        setStatusBar("LIGHT");
      }
    },

    getSystemTheme() {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    },

    updateFontSize() {
      localStorage.setItem("fontSize", this.fontSize);
      if (this.fontSize == 12) {
        document.documentElement.style.removeProperty("--content-p-font-size");
      } else {
        document.documentElement.style.setProperty(
          "--content-p-font-size",
          this.fontSize + "px"
        );
      }
    },
  };
}

// 修复图片显示不完整问题的 JS 方案
function fixPhotoBrowserSwiper() {
  const wrapper = document.querySelector(".photo-browser-swiper-container");
  alert("1");
  if (wrapper) {
    alert("2");
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.boxSizing = "border-box";
  }
}
window.fixPhotoBrowserSwiper = fixPhotoBrowserSwiper;

// Expose component to global scope for petite-vue and general access
window.ThemeComponent = ThemeComponent;

// Initialize the theme as soon as the script loads
window.themeManager = ThemeComponent();
window.themeManager.initTheme();
