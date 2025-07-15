import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const bgAudio = new Audio("/sounds/background-music.mp3");
    bgAudio.loop = true;
    bgAudio.volume = 0.3;
    audioRef.current = bgAudio;

    const tryPlay = () => {
      bgAudio.play().catch((err) => {
        console.warn("Music blocked by browser until user interacts.", err.message);
      });
      window.removeEventListener("click", tryPlay);
    };

    window.addEventListener("click", tryPlay);

    return () => {
      bgAudio.pause();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
