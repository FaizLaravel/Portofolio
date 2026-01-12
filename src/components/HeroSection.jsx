import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <div>
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            </div>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Faiz
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Muhammad
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3">
              {" "}
              Rijal
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-4">
              {" "}
              Fikri,
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-5">
              A.Md.T
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-6">
            Saya membangun aplikasi web yang responsif, terstruktur, dan siap
            digunakan untuk kebutuhan nyata.
            <span className="text-base md:text-lg text-muted-foreground max-1-1xl italic">
              ( I build responsive, well-structured web applications that are
              ready for real-world use. )
            </span>
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-6">
            <a href="#projects" className="cosmic-button">
              View My Project
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
