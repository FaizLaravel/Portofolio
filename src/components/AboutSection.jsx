import { Briefcase, Code, Database, Server, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & System Builder
            </h3>
            <p className="text-muted-foreground">
              Saya merupakan seorang Web Developer dan System Builder yang
              berpengalaman dalam pengembangan aplikasi web yang responsif,
              terstruktur, dan siap digunakan untuk kebutuhan nyata. Saya
              berkomitmen untuk membangun sistem yang stabil, mudah digunakan,
              serta mudah dikembangkan sesuai dengan kebutuhan proyek.
            </p>
            <p className="text-muted-foreground">
              Dalam proses pengembangan, saya menerapkan praktik terbaik dalam
              penulisan kode, pengelolaan database, serta penerapan desain
              responsif agar aplikasi dapat berjalan optimal di berbagai
              perangkat. Saya terbiasa bekerja secara terstruktur, berorientasi
              pada solusi, dan menyesuaikan pengembangan sistem dengan tujuan
              serta kebutuhan pengguna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Pengembangan website yang responsif, terstruktur, dan siap
                    digunakan sesuai kebutuhan nyata.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    System Development & Maintenance
                  </h4>
                  <p className="text-muted-foreground">
                    Perancangan, pengembangan, dan pemeliharaan sistem berbasis
                    web agar berjalan stabil dan mudah dikembangkan.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Database & Responsive Design
                  </h4>
                  <p className="text-muted-foreground">
                    Pengelolaan database yang terstruktur serta penerapan desain
                    responsif untuk berbagai perangkat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
