import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    { label: "O Rancho", href: "#sobre" },
    { label: "Galeria", href: "#fotos" },
    { label: "Comodidades", href: "#comodidades" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#faq" },
  ];

  const experiences = [
    {
      img: piscinaVista,
      kicker: "I — Água",
      title: "Dias lentos à beira da piscina",
      text: "Sol de Epitácio, mesa à sombra do ombrelone e um mergulho sempre que der vontade. A área externa é inteira do seu grupo.",
    },
    {
      img: areaGourmet,
      kicker: "II — Mesa",
      title: "Churrasco que vira tradição",
      text: "Espaço gourmet com churrasqueira e cozinha equipada para receber todo mundo — do café da manhã ao jantar sem pressa.",
    },
    {
      img: sinuca,
      kicker: "III — Noite",
      title: "Sinuca, conversa e boas risadas",
      text: "Quando o sol se põe, a diversão continua: mesa de sinuca, ambientes climatizados e TV para fechar o dia.",
    },
  ];

  const linkCls = "text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <a href="#topo" className="font-display text-xl italic tracking-wide text-foreground">
            Recanto <span className="not-italic font-semibold">Barreto</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`${linkCls} text-foreground/70 hover:text-clay`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkCls} hidden border border-foreground px-5 py-2.5 text-foreground hover:bg-foreground hover:text-background sm:inline-block`}
            >
              Reservar
            </a>
            <button className="p-2 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${linkCls} block py-3 text-foreground/80`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero editorial */}
      <section id="topo" className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pt-32">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className={`${linkCls} text-clay`}>Presidente Epitácio · SP</p>
          <h1 className="font-display mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Um refúgio
            <br />
            <em className="text-primary">para desacelerar</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Rancho inteiro, só para o seu grupo. Piscina, área gourmet e conforto para até 10
            pessoas, a poucos minutos do Rio Paraná.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkCls} inline-flex items-center gap-3 bg-primary px-7 py-4 text-primary-foreground hover:bg-forest`}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Consultar datas
            </a>
            <a href="#fotos" className={`${linkCls} border-b border-foreground/40 pb-1 text-foreground hover:border-clay hover:text-clay`}>
              Ver galeria
            </a>
          </div>
          <p className="mt-10 text-sm italic text-muted-foreground font-display">
            Datas abertas para Natal e Ano Novo · pagamento em até 3x
          </p>
        </div>
        <div className="relative lg:col-span-7">
          <img
            src={heroImg}
            alt="Piscina e área externa do Recanto Barreto"
            className="h-[60vh] min-h-[380px] w-full rounded-t-[999px] object-cover lg:h-[78vh]"
          />
          <img
            src={piscinaNoite}
            alt="Piscina ao entardecer"
            className="absolute -bottom-8 -left-6 hidden h-48 w-40 border-8 border-background object-cover shadow-xl md:block"
          />
        </div>
      </section>

      {/* Faixa de números */}
      <section className="border-y border-border bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-5 lg:grid-cols-4 lg:divide-x lg:px-10">
          {[
            ["10", "hóspedes"],
            ["2", "quartos · 1 suíte"],
            ["1", "piscina privativa"],
            ["3x", "para parcelar"],
          ].map(([n, l]) => (
            <div key={l} className="py-8 text-center">
              <p className="font-display text-4xl text-primary">{n}</p>
              <p className={`${linkCls} mt-2 text-muted-foreground`}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24 text-center">
        <p className={`${linkCls} text-clay`}>O Rancho</p>
        <h2 className="font-display mt-5 text-3xl leading-snug sm:text-5xl">
          Onde o tempo passa devagar e as melhores lembranças acontecem.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          No Jardim Aeroporto, o Recanto Barreto reúne o que um fim de semana perfeito pede: verde ao
          redor, piscina, churrasqueira e uma casa confortável com 2 quartos — um deles suíte — para
          reunir família e amigos com total privacidade.
        </p>
      </section>

      {/* Experiências em zigue-zague */}
      <section className="mx-auto max-w-7xl space-y-24 px-5 pb-24 lg:px-10">
        {experiences.map((exp, i) => (
          <div key={exp.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <img
              src={exp.img}
              alt={exp.title}
              loading="lazy"
              className={`h-[420px] w-full object-cover ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div className={i % 2 ? "lg:order-1 lg:text-right" : ""}>
              <p className="font-display italic text-clay">{exp.kicker}</p>
              <h3 className="font-display mt-3 text-3xl sm:text-4xl">{exp.title}</h3>
              <p className={`mt-5 max-w-md text-lg leading-relaxed text-muted-foreground ${i % 2 ? "lg:ml-auto" : ""}`}>
                {exp.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Galeria mosaico */}
      <section id="fotos" className="scroll-mt-24 bg-forest py-24 text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${linkCls} text-sun`}>Galeria</p>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl">Cada cantinho</h2>
            </div>
            <p className="max-w-xs text-sm text-forest-foreground/70">Toque em uma foto para ampliar.</p>
          </div>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
            {GALLERY.map((photo, i) => {
              const span =
                i === 0 ? "col-span-2 row-span-2" : i === 3 ? "md:row-span-2" : i === 5 ? "col-span-2" : "";
              return (
                <button
                  key={photo.caption}
                  onClick={() => setLightbox(i)}
                  className={`group relative overflow-hidden ${span}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/80 to-transparent p-4 text-left text-sm opacity-0 transition-opacity group-hover:opacity-100">
                    {photo.caption}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-4 top-4 p-2 text-forest-foreground" aria-label="Fechar">
            <X className="h-7 w-7" />
          </button>
          <img
            src={GALLERY[lightbox]!.src}
            alt={GALLERY[lightbox]!.caption}
            className="max-h-[75vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="font-display mt-4 text-center italic text-forest-foreground">{GALLERY[lightbox]!.caption}</p>
          <div className="mt-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)}
              className="border border-forest-foreground/40 p-2 text-forest-foreground"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setLightbox((lightbox + 1) % GALLERY.length)}
              className="border border-forest-foreground/40 p-2 text-forest-foreground"
              aria-label="Próxima foto"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Comodidades */}
      <section id="comodidades" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className={`${linkCls} text-clay`}>Comodidades</p>
            <h2 className="font-display mt-4 text-4xl leading-tight">Pensado para você só aproveitar</h2>
            <img src={sala} alt="Sala de estar" loading="lazy" className="mt-8 hidden h-72 w-full object-cover lg:block" />
          </div>
          <ul className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
            {AMENITIES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-5 border-b border-border py-6">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-clay" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Depoimento */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex justify-center gap-1 text-clay">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="text-center">
                <blockquote className="font-display text-lg italic leading-relaxed">“{t.text}”</blockquote>
                <figcaption className={`${linkCls} mt-5 text-muted-foreground`}>{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Localização + regras */}
      <section id="localizacao" className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className={`${linkCls} text-clay`}>Localização</p>
          <h2 className="font-display mt-4 text-4xl">Jardim Aeroporto, Presidente Epitácio</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A poucos minutos do centro e da orla do Rio Paraná, famosa pelo pôr do sol e pela pesca.
            O endereço exato é enviado após a confirmação da reserva.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jardim+Aeroporto,+Presidente+Epit%C3%A1cio,+SP"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkCls} inline-flex items-center gap-2 border-b border-foreground/40 pb-1 hover:text-clay`}
            >
              <MapPin className="h-4 w-4" /> Google Maps
            </a>
            <a
              href="https://waze.com/ul?q=Jardim%20Aeroporto%2C%20Presidente%20Epit%C3%A1cio%2C%20SP&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkCls} border-b border-foreground/40 pb-1 hover:text-clay`}
            >
              Waze
            </a>
          </div>
        </div>
        <div className="border border-border bg-card p-8 sm:p-10">
          <h3 className="font-display text-2xl">Regras da casa</h3>
          <ul className="mt-6 divide-y divide-border text-sm">
            {[
              { icon: Clock, text: "Check-in a partir das 14h e check-out até as 12h." },
              { icon: Volume2, text: "Som ambiente bem-vindo; silêncio após as 22h." },
              { icon: PawPrint, text: "Pets de pequeno porte, combinados com antecedência." },
              { icon: Users, text: "Capacidade máxima de 10 pessoas, incluindo crianças." },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 py-4">
                <Icon className="h-5 w-5 shrink-0 text-clay" strokeWidth={1.5} />
                <span className="text-foreground/80">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 pb-24">
        <h2 className="font-display text-center text-4xl">Dúvidas frequentes</h2>
        <div className="mt-10 border-t border-border">
          {FAQ.map((item, i) => (
            <div key={item.q} className="border-b border-border">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg"
                aria-expanded={openFaq === i}
              >
                {item.q}
                <span className="text-2xl font-light text-clay">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="pb-6 leading-relaxed text-muted-foreground">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA final com imagem */}
      <section className="relative overflow-hidden">
        <img src={churrasqueira} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-28 text-center text-forest-foreground">
          <p className={`${linkCls} text-sun`}>Reservas</p>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl">Sua próxima estadia começa com uma mensagem</h2>
          <p className="mx-auto mt-6 max-w-xl text-forest-foreground/80">
            Feriados costumam esgotar rápido. Consulte datas e parcele em até 3x.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkCls} mt-10 inline-flex items-center gap-3 bg-sun px-8 py-4 text-sun-foreground hover:bg-forest-foreground`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center text-sm text-muted-foreground">
          <p className="font-display text-2xl italic text-foreground">
            Recanto <span className="not-italic font-semibold">Barreto</span>
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-clay">
            <Phone className="h-4 w-4" /> (18) 98106-1762
          </a>
          <p>Jardim Aeroporto · Presidente Epitácio/SP</p>
          <p className="text-xs">© {new Date().getFullYear()} Recanto Barreto — Locação por temporada.</p>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="animate-whatsapp-pulse fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
