export default function App() {
  const toggleTheme = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    let isDark: boolean;

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains("dark");
      root.classList.remove(isDark ? "dark" : "light");
      root.classList.add(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div class="flex h-screen flex-col justify-between bg-white p-4 dark:bg-gray-800">
      <div class="text-gray-800 dark:text-gray-100">
        填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字
      </div>
      <div class="text-gray-800 dark:text-gray-100">
        填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字
      </div>
      <div class="text-gray-800 dark:text-gray-100">
        填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字
      </div>
      <div>
        <button
          class="rounded-md border p-2 outline-none  dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-100"
          onClick={toggleTheme}
        >
          切换主题
        </button>
      </div>
    </div>
  );
}
