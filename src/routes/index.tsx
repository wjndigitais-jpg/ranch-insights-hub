import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BedDouble,
  Users,
  Waves,
  CircleDot,
  Snowflake,
  Refrigerator,
  Wifi,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  PawPrint,
  Clock,
  Volume2,
  ShieldCheck,
  Flame,
  Trees,
  Phone,
} from "lucide-react";

import heroImg from "@/assets/hero-clean.jpg";
import piscinaArea from "@/assets/piscina-area.jpg";
import piscinaVista from "@/assets/piscina-vista.jpg";
import sala from "@/assets/sala.jpg";
import piscinaNoite from "@/assets/piscina-noite.jpg";
import areaGourmet from "@/assets/area-gourmet.jpg";
import churrasqueira from "@/assets/churrasqueira.jpg";
import sinuca from "@/assets/sinuca.jpg";

const WHATSAPP_NUMBER = "5518981061762";
const WHATSAPP_MESSAGE =
  "Olá! Vi o Recanto Barreto no site e gostaria de saber os valores para um final de semana.";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const GALLERY = [
  { src: heroImg, caption: "Área externa com piscina e espaço gourmet" },
  { src: piscinaArea, caption: "Piscina com mesa e ombrelone" },
  { src: piscinaVista, caption: "Vista da piscina e área de lazer" },
  { src: sala, caption: "Sala de estar ampla e arejada" },
  { src: piscinaNoite, caption: "Área da piscina ao entardecer" },
  { src: areaGourmet, caption: "Espaço gourmet para refeições em grupo" },
  { src: churrasqueira, caption: "Churrasqueira e jardim" },
  { src: sinuca, caption: "Mesa de sinuca para a diversão da galera" },
];

const AMENITIES = [
  { icon: BedDouble, title: "2 quartos (1 suíte)", desc: "Acomodações confortáveis para toda a família" },
  { icon: Users, title: "Até 10 pessoas", desc: "Espaço de sobra para família e amigos" },
  { icon: Waves, title: "Piscina", desc: "Perfeita para os dias quentes de Epitácio" },
  { icon: CircleDot, title: "Sinuca", desc: "Diversão garantida nas noites em grupo" },
  { icon: Snowflake, title: "Ar-condicionado e TV", desc: "Conforto térmico e entretenimento" },
  { icon: Refrigerator, title: "Cozinha equipada", desc: "Eletrodomésticos e freezer à disposição" },
  { icon: Wifi, title: "Wi-Fi", desc: "Conectividade para quem precisa" },
  { icon: Flame, title: "Churrasqueira", desc: "Área gourmet para aquele churrasco" },
  { icon: ShieldCheck, title: "Privacidade total", desc: "Imóvel inteiro só para o seu grupo" },
];

const TESTIMONIALS = [
  {
    name: "Família Rodrigues",
    text: "Lugar maravilhoso! A piscina é ótima e a casa muito bem cuidada. As crianças não queriam ir embora. Voltaremos com certeza!",
  },
  {
    name: "Carlos M.",
    text: "Passamos o feriado em 8 pessoas e foi perfeito. Sinuca, churrasqueira e uma área externa deliciosa. Atendimento nota 10.",
  },
  {
    name: "Ana Paula S.",
    text: "Rancho aconchegante e muito limpo. A localização é tranquila e perto de tudo em Presidente Epitácio. Recomendo demais!",
  },
];

const FAQ = [
  {
    q: "Como funciona a reserva?",
    a: "É simples: chame no WhatsApp, consulte as datas disponíveis e faça seu orçamento. A reserva é confirmada mediante sinal, e o restante pode ser dividido em até 3 vezes.",
  },
  {
    q: "Precisa pagar caução?",
    a: "Trabalhamos com um valor de caução reembolsável, devolvido após a vistoria de saída. Os detalhes são combinados direto no WhatsApp.",
  },
  {
    q: "Aceita animais de estimação?",
    a: "Sim! Pets de pequeno porte são bem-vindos. Pedimos apenas que os tutores cuidem da limpeza e da segurança dos animais.",
  },
  {
    q: "Roupa de cama e banho estão inclusas?",
    a: "Disponibilizamos roupas de cama. Recomendamos trazer toalhas de banho e de piscina para maior conforto.",
  },
  {
    q: "Quais os horários de check-in e check-out?",
    a: "Check-in a partir das 14h e check-out até as 12h. Horários flexíveis podem ser combinados conforme a disponibilidade.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recanto Barreto — Locação por Temporada em Presidente Epitácio/SP" },
      {
        name: "description",
        content:
          "Rancho com piscina, sinuca e área gourmet em Presidente Epitácio/SP. Acomoda até 10 pessoas em 2 quartos. Reserve pelo WhatsApp e parcele em até 3x.",
      },
      { property: "og:title", content: "Recanto Barreto — Seu refúgio em Presidente Epitácio" },
      {
        property: "og:description",
        content:
          "Piscina, sinuca, churrasqueira e conforto para até 10 pessoas. Consulte datas e valores pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Recanto Barreto",
          description:
            "Rancho para locação por temporada com piscina, sinuca e área gourmet em Presidente Epitácio/SP. Acomoda até 10 pessoas.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Presidente Epitácio",
            addressRegion: "SP",
            addressCountry: "BR",
            streetAddress: "Jardim Aeroporto",
          },
          telephone: "+55-18-98106-1762",
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Piscina" },
            { "@type": "LocationFeatureSpecification", name: "Wi-Fi" },
            { "@type": "LocationFeatureSpecification", name: "Ar-condicionado" },
            { "@type": "LocationFeatureSpecification", name: "Churrasqueira" },
          ],
          petsAllowed: true,
        }),
      },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((dir: number) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const navItems = [
    { label: "Fotos", href: "#fotos" },
    { label: "Comodidades", href: "#comodidades" },
    { label: "O Rancho", href: "#sobre" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#topo" className="font-display text-xl font-bold text-primary">
            Recanto Barreto
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-foreground/80 transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-transform hover:scale-105 sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Reservar
            </a>
            <button
              className="rounded-md p-2 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-foreground/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative flex min-h-[92vh] items-end pt-16">
        <img
          src={heroImg}
          alt="Piscina e área externa do Recanto Barreto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-sun px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-sun-foreground">
              Disponível para Natal e Ano Novo
            </span>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-forest-foreground sm:text-5xl lg:text-6xl">
              Seu refúgio em Presidente Epitácio
            </h1>
            <p className="mt-4 text-lg text-forest-foreground/90 sm:text-xl">
              Conforto, lazer e espaço para momentos inesquecíveis com sua família e amigos —
              acomoda até 10 pessoas com privacidade total.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-base font-extrabold text-sun-foreground shadow-lg transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Consultar datas no WhatsApp
              </a>
              <a
                href="#fotos"
                className="inline-flex items-center gap-2 rounded-full border-2 border-forest-foreground/70 px-6 py-3 text-base font-bold text-forest-foreground transition-colors hover:bg-forest-foreground/10"
              >
                Ver fotos
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: Wifi, label: "Wi-Fi" },
                { icon: Waves, label: "Piscina" },
                { icon: Snowflake, label: "Ar-condicionado" },
                { icon: Users, label: "Até 10 pessoas" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-foreground/15 px-3 py-1.5 text-xs font-bold text-forest-foreground backdrop-blur"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="fotos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Conheça cada cantinho</h2>
            <p className="mt-2 text-muted-foreground">Arraste para o lado e toque para ampliar.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollCarousel(-1)}
              className="rounded-full border border-border p-2 transition-colors hover:bg-secondary"
              aria-label="Fotos anteriores"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollCarousel(1)}
              className="rounded-full border border-border p-2 transition-colors hover:bg-secondary"
              aria-label="Próximas fotos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {GALLERY.map((photo, i) => (
            <button
              key={photo.caption}
              onClick={() => setLightbox(i)}
              className="group relative w-72 shrink-0 snap-start overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent px-3 pb-2 pt-8 text-left text-xs font-semibold text-forest-foreground">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-forest-foreground/15 p-2 text-forest-foreground"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={GALLERY[lightbox].src}
            alt={GALLERY[lightbox].caption}
            className="max-h-[75vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-center text-sm font-semibold text-forest-foreground">
            {GALLERY[lightbox].caption}
          </p>
          <div className="mt-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)}
              className="rounded-full bg-forest-foreground/15 p-2 text-forest-foreground"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setLightbox((lightbox + 1) % GALLERY.length)}
              className="rounded-full bg-forest-foreground/15 p-2 text-forest-foreground"
              aria-label="Próxima foto"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Comodidades */}
      <section id="comodidades" className="scroll-mt-20 bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
            Tudo para o seu conforto
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Estrutura completa para você só se preocupar em aproveitar.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre + Regras */}
      <section id="sobre" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Trees className="h-8 w-8 text-primary" />
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Sobre o Recanto Barreto</h2>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Imagine acordar com o canto dos pássaros, tomar café olhando para a piscina e passar o
              dia entre um mergulho e uma partida de sinuca. O Recanto Barreto é aquele lugar onde o
              tempo desacelera: um rancho aconchegante no Jardim Aeroporto, em Presidente Epitácio,
              pensado para reunir quem você ama.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Com 2 quartos (sendo 1 suíte), cozinha equipada, área gourmet com churrasqueira e uma
              área externa cercada de verde, o rancho acomoda até 10 pessoas com total privacidade —
              o imóvel inteiro fica só para o seu grupo.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold">Regras da casa</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Check-in</strong> a partir das 14h e <strong>check-out</strong> até as 12h
                  (flexível conforme disponibilidade).
                </span>
              </li>
              <li className="flex gap-3">
                <Volume2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Som ambiente é bem-vindo, mas pedimos respeito aos vizinhos após as 22h.
                </span>
              </li>
              <li className="flex gap-3">
                <PawPrint className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Pets de pequeno porte são permitidos — combine com antecedência.</span>
              </li>
              <li className="flex gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Capacidade máxima de 10 pessoas, incluindo crianças.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="scroll-mt-20 bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Localização e como chegar</h2>
              <p className="mt-4 leading-relaxed text-foreground/85">
                Estamos no bairro Jardim Aeroporto, em Presidente Epitácio/SP — a poucos minutos do
                centro e da orla do Rio Paraná, famosa pelo pôr do sol e pela pesca.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jardim+Aeroporto,+Presidente+Epit%C3%A1cio,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  <MapPin className="h-4 w-4" />
                  Abrir no Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=Jardim%20Aeroporto%2C%20Presidente%20Epit%C3%A1cio%2C%20SP&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
                >
                  Abrir no Waze
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                O endereço exato é enviado no WhatsApp após a confirmação da reserva.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={heroImg}
                alt="Vista da área externa do Recanto Barreto"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
          Quem se hospedou, recomenda
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold text-primary">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-secondary/60 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">Dúvidas frequentes</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map((item, i) => (
              <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-forest py-16 text-center text-forest-foreground">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Garanta sua data antes que acabe
          </h2>
          <p className="mt-3 text-forest-foreground/85">
            Finais de semana e feriados costumam esgotar rápido — e ainda dá para dividir em até 3
            vezes. Chame agora e faça seu orçamento sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-8 py-4 text-lg font-extrabold text-sun-foreground shadow-xl transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-foreground py-10 text-background/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-background">Recanto Barreto</p>
            <p className="mt-2 text-sm">Seu refúgio em Presidente Epitácio/SP.</p>
          </div>
          <div>
            <p className="text-sm font-bold text-background">Contato</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm hover:text-background"
            >
              <Phone className="h-4 w-4" /> (18) 98106-1762
            </a>
            <p className="mt-1 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" /> Jardim Aeroporto, Presidente Epitácio/SP
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-background">Links rápidos</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-background">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Recanto Barreto — Locação por temporada.
        </p>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="animate-whatsapp-pulse fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-xl transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
