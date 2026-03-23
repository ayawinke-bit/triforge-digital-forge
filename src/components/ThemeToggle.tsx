import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-border bg-card/50" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover-lift"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="animate-in zoom-in duration-300" />
      ) : (
        <Moon size={18} className="animate-in zoom-in duration-300" />
      )}
    </button>
  );
}
