import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useKeyboardNavigation() {
  const router = useRouter();

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      // Handle Escape key
      if (event.key === "Escape") {
        router.push("/");
      }

      // Handle number keys for quick navigation
      if (event.altKey) {
        switch (event.key) {
          case "1":
            router.push("/#about");
            break;
          case "2":
            router.push("/projects");
            break;
          case "3":
            router.push("/#testimonials");
            break;
          case "h":
            router.push("/");
            break;
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);
}

export function useScrollNavigation() {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.altKey) {
        switch (event.key) {
          case "ArrowUp":
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "ArrowDown":
            window.scrollTo({ 
              top: document.documentElement.scrollHeight,
              behavior: "smooth" 
            });
            break;
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
}
