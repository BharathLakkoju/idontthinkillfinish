"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function DarkModeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");

    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-full transition-colors duration-200",
                "bg-secondary/10 hover:bg-secondary/20 text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
            aria-label="Toggle dark mode"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-indigo-600" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
            )}
        </button>
    );
}
