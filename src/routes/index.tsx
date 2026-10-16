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
  Phone,
  Sun,
  Compass,
  Fish,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink,
  Car,
  UtensilsCrossed,
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
  "Olá! Vi o Recanto Barreto no site e gostaria de saber a disponibilidade e valores para uma estadia.";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type GalleryCategory = "todos" | "piscina" | "gourmet" | "interior";

interface PhotoItem {
  src: string;
  caption: string;
  category: "piscina" | "gourmet" | "interior";
  tag: string;
}

const GALLERY: PhotoItem[] = [
  {
    src: heroImg,
    caption: "Área externa com piscina privativa, espreguiçadeiras e espaço gourmet",
    category: "piscina",
    tag: "Piscina & Lazer",
  },
  {
    src: piscinaArea,
    caption: "Piscina cristalina com mesa, cadeiras e ombrelone para relaxar ao sol",
    category: "piscina",
    tag: "Solarium",
  },
  {
    src: piscinaVista,
    caption: "Ampla área de lazer aberta com jardim e total privacidade",
    category: "piscina",
    tag: "Área Externa",
  },
  {
    src: areaGourmet,
    caption: "Espaço gourmet integrado com mesas rústicas para refeições em família",
    category: "gourmet",
    tag: "Espaço Gourmet",
  },
  {
    src: churrasqueira,
    caption: "Churrasqueira em alvenaria e bancada de preparo com freezer de apoio",
    category: "gourmet",
    tag: "Churrasqueira",
  },
  {
    src: sinuca,
    caption: "Mesa de sinuca oficial para a diversão de adultos e crianças",
    category: "piscina",
    tag: "Jogos & Lazer",
  },
  {
    src: sala,
    caption: "Sala de estar ampla, arejada e climatizada para momentos de descanso",
    category: "interior",
    tag: "Casa & Conforto",
  },
  {
    src: piscinaNoite,
    caption: "Iluminação aconchegante na área da piscina durante o entardecer",
    category: "piscina",
    tag: "Pôr do Sol & Noite",
  },
];

const AMENITIES = [
  {
    icon: BedDouble,
    title: "2 Quartos (1 Suíte)",
    desc: "Acomodações aconchegantes com camas confortáveis e suíte privativa.",
  },
  {
    icon: Users,
    title: "Até 10 Hóspedes",
    desc: "Capacidade ideal para receber sua família e amigos com muito conforto.",
  },
  {
    icon: Waves,
    title: "Piscina Privativa",
    desc: "Área molhada privativa para se refrescar no clima agradável de Epitácio.",
  },
  {
    icon: CircleDot,
    title: "Mesa de Sinuca",
    desc: "Mesa oficial de bilhar para animar as tardes e noites do seu grupo.",
  },
  {
    icon: Snowflake,
    title: "Ar-Condicionado & TV",
    desc: "Climatização nos quartos para garantir noites frescas e tranquilas.",
  },
  {
    icon: Flame,
    title: "Espaço Gourmet & Churrasqueira",
    desc: "Área com churrasqueira, bancada, mesa grande e freezer horizontal.",
  },
  {
    icon: Refrigerator,
    title: "Cozinha Completa",
    desc: "Geladeira, fogão, freezer, micro-ondas e utensílios à disposição.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Fibra Óptica",
    desc: "Internet de alta velocidade para home office, músicas e redes sociais.",
  },
  {
    icon: ShieldCheck,
    title: "100% Privativo",
    desc: "O imóvel inteiro fica reservado exclusivamente para o seu grupo.",
  },
  {
    icon: PawPrint,
    title: "Pet Friendly",
    desc: "Seu pet de pequeno porte é muito bem-vindo para curtir junto com a família.",
  },
];

const ATTRACTIONS = [
  {
    icon: Sun,
    tag: "Destaque Nacional · 5 min",
    title: "O Pôr do Sol Mais Bonito do Brasil",
    location: "Orla Fluvial do Rio Paraná",
    desc: "Eleito em votação nacional como o mais belo entardecer do país. Uma pintura viva de cores refletidas sobre as águas do grandioso Rio Paraná, a poucos minutos do rancho.",
    tips: "Dica: Caminhe no calçadão a partir das 17h30 e garanta fotos espetaculares no Mirante.",
  },
  {
    icon: Waves,
    tag: "Balneário & Lazer · 7 min",
    title: "Parque O Figueiral & Prainha",
    location: "Área de Preservação & Balneário",
    desc: "Ampla praia de água doce limpa e calma, cercada por árvores centenárias. Conta com quiosques, áreas de piquenique, quadras de areia e esportes aquáticos.",
    tips: "Dica: Excelente para famílias com crianças pequenas devido às águas rasas e calmas.",
  },
  {
    icon: Fish,
    tag: "Pesca Esportiva · Polo Turístico",
    title: "Pesca de Tucunaré no Rio Paraná",
    location: "Rios Paraná e Tibagi",
    desc: "Presidente Epitácio é a meca da pesca esportiva no Brasil. Guias e operadores locais realizam saídas para captura e soltura de belos exemplares de Tucunarés azuis e amarelos.",
    tips: "Dica: É possível contratar guias náuticos diretamente na cidade para meio dia ou dia inteiro.",
  },
  {
    icon: UtensilsCrossed,
    tag: "Gastronomia Ribeirinha",
    title: "Píer Turístico & Peixarias",
    location: "Margens do Rio Paraná",
    desc: "Restaurantes e quiosques renomados que servem o tradicional filé de tilápia, tucunaré frito, caldinho de peixe fresco e cervejas artesanais em mesas com vista panorâmica para o rio.",
    tips: "Dica: Não deixe de experimentar a tradicional porção de filé de tilápia com molho tártaro artesanal.",
  },
];

const TESTIMONIALS = [
  {
    name: "Família Rodrigues",
    origin: "Passaram o fim de semana em 9 pessoas",
    text: "O Recanto Barreto superou todas as expectativas. O lugar é impecável, extremamente limpo e a piscina é maravilhosa. O espaço gourmet com a sinuca manteve todo mundo entretido. Já estamos planejando a volta!",
  },
  {
    name: "Carlos Eduardo M.",
    origin: "Feriado prolongado entre amigos",
    text: "Rancho completo com tudo o que precisamos. A churrasqueira é ótima, a sinuca animou a noite inteira e os quartos com ar-condicionado garantiram um sono perfeito no calor de Epitácio. Atendimento rápido e transparente.",
  },
  {
    name: "Ana Paula & Família",
    origin: "Comemoração de aniversário em família",
    text: "Lugar calmo, aconchegante e seguro no Jardim Aeroporto. Nos sentimos em casa desde o primeiro minuto. A piscina com o ombrelone é deliciosa para passar o dia. Recomendo de olhos fechados!",
  },
];

const FAQ = [
  {
    q: "Como faço para reservar uma data?",
    a: "É muito simples e direto: clique em qualquer botão de WhatsApp nesta página para falar conosco. Consultamos as datas na hora, enviamos os detalhes e formalizamos a reserva com um sinal de garantia.",
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Trabalhamos com pagamento facilitado via PIX ou parcelamento em até 3 vezes no cartão de crédito. Você pode pagar o sinal para segurar a data e o restante até o momento do check-in.",
  },
  {
    q: "Como funciona a política de caução?",
    a: "Para segurança mútua e conservação do imóvel, solicitamos um valor de caução de garantia, que é integralmente restituído após a vistoria de saída no dia do check-out.",
  },
  {
    q: "Posso levar animais de estimação (pets)?",
    a: "Sim! Somos Pet Friendly para animais de pequeno porte. Pedimos apenas que os tutores cuidem da higiene e preservem o mobiliário e a área da piscina.",
  },
  {
    q: "As roupas de cama e banho estão incluídas?",
    a: "Disponibilizamos roupas de cama limpas e higienizadas para os quartos. Recomendamos que os hóspedes tragam suas toalhas de banho e de piscina de uso pessoal para maior comodidade.",
  },
  {
    q: "Quais são os horários de check-in e check-out?",
    a: "O check-in padrão é realizado a partir das 14h00 e o check-out até as 12h00. Horários especiais ou estendidos podem ser alinhados previamente caso não haja outra reserva consecutiva.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recanto Barreto — Rancho Exclusivo por Temporada em Presidente Epitácio/SP" },
      {
        name: "description",
        content:
          "Rancho sofisticado com piscina privativa, espaço gourmet, sinuca e ar-condicionado em Presidente Epitácio/SP. Acomoda até 10 pessoas. Reserve direto pelo WhatsApp.",
      },
      { property: "og:title", content: "Recanto Barreto — Seu refúgio exclusivo em Presidente Epitácio" },
      {
        property: "og:description",
        content:
          "Piscina privativa, área gourmet completa, sinuca e lazer para até 10 pessoas a minutos do Rio Paraná. Consulte datas e parcele em até 3x.",
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
            "Rancho sofisticado para locação por temporada com piscina, sinuca e área gourmet em Presidente Epitácio/SP. Acomoda até 10 pessoas.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Presidente Epitácio",
            addressRegion: "SP",
            addressCountry: "BR",
            streetAddress: "Jardim Aeroporto",
          },
          telephone: "+55-18-98106-1762",
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Piscina Privativa" },
            { "@type": "LocationFeatureSpecification", name: "Wi-Fi Fibra" },
            { "@type": "LocationFeatureSpecification", name: "Ar-condicionado" },
            { "@type": "LocationFeatureSpecification", name: "Churrasqueira & Gourmet" },
            { "@type": "LocationFeatureSpecification", name: "Mesa de Sinuca" },
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
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredGallery =
    activeCategory === "todos"
      ? GALLERY
      : GALLERY.filter((photo) => photo.category === activeCategory);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % filteredGallery.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + filteredGallery.length) % filteredGallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filteredGallery.length]);

  const navItems = [
    { label: "O Rancho", href: "#rancho" },
    { label: "Galeria", href: "#galeria" },
    { label: "Comodidades", href: "#comodidades" },
    { label: "Pontos Turísticos", href: "#turismo" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      {/* Header Fixo com Efeito Glass Moderno */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav border-b border-border shadow-xs py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Recanto <span className="font-normal italic text-accent">Barreto</span>
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Rancho & Temporada · Epitácio
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA do Header */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-sm transition-all duration-300 hover:bg-forest hover:shadow-md hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4 text-accent" />
              <span>Reservar Data</span>
            </a>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Alternar menu de navegação"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="border-b border-border bg-card/95 backdrop-blur-md px-6 py-6 shadow-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/50 pb-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section — Estilo Resort Cinematográfico */}
      <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28">
        {/* Imagem de Fundo Hero com Gradiente Suave */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroImg}
            alt="Piscina e lazer do Recanto Barreto"
            className="h-full w-full object-cover object-center brightness-[0.92] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-radial-[at_top_right] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-card/85 px-4 py-1.5 backdrop-blur-md shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-foreground">
                Locação Exclusiva por Temporada · Epitácio/SP
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="font-display mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground">
              O seu refúgio de descanso e{" "}
              <span className="italic font-normal text-primary">sofisticação</span> à beira do Rio Paraná.
            </h1>

            {/* Subtítulo */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-foreground/85 max-w-2xl font-normal">
              Imóvel 100% privativo para até 10 pessoas. Piscina privativa com solarium, espaço gourmet com
              churrasqueira, mesa de sinuca e quartos climatizados no Jardim Aeroporto.
            </p>

            {/* Ações / Botões */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-forest hover:shadow-xl hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-5 w-5 text-accent" />
                <span>Consultar Datas & Valores</span>
              </a>

              <a
                href="#galeria"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-card/70 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent hover:text-accent hover:bg-card"
              >
                <span>Ver Fotos do Rancho</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Informações Complementares */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-foreground/75 font-medium">
              <span className="flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Datas para Feriados & Finais de Semana
              </span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Pagamento Facilitado em até 3x
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Especificações e Destaques Rápidos */}
      <section className="relative z-10 -mt-6 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-border">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary mb-3">
                <Users className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold text-foreground">Até 10</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Hóspedes</span>
            </div>

            <div className="flex flex-col items-center text-center sm:pl-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary mb-3">
                <BedDouble className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold text-foreground">2 Quartos</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">1 Suíte Climatizada</span>
            </div>

            <div className="flex flex-col items-center text-center sm:pl-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary mb-3">
                <Waves className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold text-foreground">Piscina</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Privativa & Solarium</span>
            </div>

            <div className="flex flex-col items-center text-center sm:pl-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary mb-3">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold text-foreground">100%</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Rancho Exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção "O Rancho" — Apresentação da Experiência */}
      <section id="rancho" className="scroll-mt-24 py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              A Experiência Recanto Barreto
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Um santuário privativo feito para celebrar os bons momentos.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Localizado no tranquilo bairro Jardim Aeroporto em Presidente Epitácio/SP, o Recanto Barreto
              combina o sossego do interior paulista com a infraestrutura completa de uma casa de temporada de alto padrão.
            </p>
          </div>

          {/* Cards Editoriais de Experiência */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1: Piscina */}
            <div className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={piscinaVista}
                  alt="Piscina com solarium"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full bg-forest/80 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                  Água & Sol
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-foreground">Dias de Solarium & Piscina</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Mergulhe a qualquer hora em uma piscina com água límpida, relaxe na mesa com ombrelone e curta o calor típico de Presidente Epitácio com tranquilidade.
                </p>
              </div>
            </div>

            {/* Card 2: Espaço Gourmet */}
            <div className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={areaGourmet}
                  alt="Área gourmet com churrasqueira"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full bg-forest/80 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                  Churrasco & Mesa
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-foreground">Área Gourmet Completa</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Churrasqueira em alvenaria, bancada espaçosa, freezer horizontal e mesas rústicas para acomodar todo o grupo confortavelmente do almoço ao jantar.
                </p>
              </div>
            </div>

            {/* Card 3: Sinuca & Jogos */}
            <div className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sinuca}
                  alt="Mesa de sinuca"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full bg-forest/80 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                  Noite & Jogos
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-foreground">Sinuca & Entretenimento</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A diversão não acaba quando o sol se põe. Desafie os amigos na mesa de sinuca oficial e desfrute de ambientes arejados e climatizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Galeria Categorizada por Ambientes */}
      <section id="galeria" className="scroll-mt-24 bg-forest py-24 text-forest-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Cabeçalho da Galeria */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Galeria Fotográfica
              </p>
              <h2 className="font-display mt-2 text-3xl sm:text-5xl font-bold text-white">
                Conheça cada ambiente
              </h2>
              <p className="mt-3 text-sm text-forest-foreground/75 max-w-lg">
                Fotos reais de todos os espaços do rancho. Clique em qualquer imagem para abrir o visualizador ampliado.
              </p>
            </div>

            {/* Abas de Filtro por Categoria */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "todos", label: "Todos os Espaços" },
                { id: "piscina", label: "Piscina & Lazer" },
                { id: "gourmet", label: "Espaço Gourmet" },
                { id: "interior", label: "Casa & Conforto" },
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as GalleryCategory)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-forest font-bold shadow-md"
                        : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de Imagens Filtradas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((photo, index) => (
              <div
                key={photo.caption}
                onClick={() => setLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/3] shadow-md transition-all duration-300 hover:shadow-2xl hover:border-accent/50"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Tag de Ambiente */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-forest/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-accent backdrop-blur-md border border-white/10">
                    {photo.tag}
                  </span>
                </div>
                {/* Overlay com Legenda no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-sm font-medium text-white leading-snug">{photo.caption}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <span>Clique para ampliar</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Interativo com Navegação */}
      {lightbox !== null && filteredGallery[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          {/* Botão Fechar */}
          <button
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Fechar galeria"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Imagem em Destaque */}
          <div
            className="relative flex max-h-[80vh] max-w-5xl items-center justify-center overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightbox].src}
              alt={filteredGallery[lightbox].caption}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>

          {/* Legenda e Contador */}
          <div
            className="mt-4 flex max-w-2xl flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              {filteredGallery[lightbox].tag} · {lightbox + 1} de {filteredGallery.length}
            </span>
            <p className="font-display mt-1 text-base sm:text-lg text-white">
              {filteredGallery[lightbox].caption}
            </p>
          </div>

          {/* Controles de Navegação */}
          <div
            className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() =>
                setLightbox((lightbox - 1 + filteredGallery.length) % filteredGallery.length)
              }
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 backdrop-blur-sm"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setLightbox((lightbox + 1) % filteredGallery.length)}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 backdrop-blur-sm"
              aria-label="Próxima foto"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Comodidades de Resort */}
      <section id="comodidades" className="scroll-mt-24 py-24 px-6 lg:px-12 bg-sand/40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Infraestrutura & Lazer
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl font-bold text-foreground">
              Tudo o que você precisa para relaxar sem preocupações
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">
              Planejado em cada detalhe para oferecer comodidade, entretenimento e conforto térmico a todos os seus convidados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-5 rounded-2xl bg-card border border-border p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-accent/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVO: Guia Turístico de Presidente Epitácio */}
      <section id="turismo" className="scroll-mt-24 py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                <Compass className="h-3.5 w-3.5 text-accent" />
                <span>Turismo & Lazer Regional</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
                Descubra os encantos de Presidente Epitácio
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Conhecida nacionalmente como a <strong className="text-foreground">Jóia do Rio Paraná</strong>, a cidade oferece praias de água doce cristalina, o pôr do sol mais aclamado do país e o polo de pesca esportiva.
              </p>
            </div>

            <div className="lg:text-right">
              <span className="text-xs uppercase tracking-wider text-muted-foreground block">
                Localização do Rancho
              </span>
              <span className="font-display text-lg font-bold text-foreground">
                Jardim Aeroporto · Perto de Tudo
              </span>
            </div>
          </div>

          {/* Cards dos Pontos Turísticos */}
          <div className="grid gap-8 md:grid-cols-2">
            {ATTRACTIONS.map((attraction) => {
              const Icon = attraction.icon;
              return (
                <div
                  key={attraction.title}
                  className="rounded-2xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-accent/40"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-primary">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                      {attraction.tag}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      {attraction.location}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {attraction.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {attraction.desc}
                  </p>

                  <div className="mt-5 rounded-xl bg-sand/60 border border-border/60 p-3.5 text-xs text-foreground/90 font-medium">
                    {attraction.tips}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regras da Casa & Estadia Consciente */}
      <section className="bg-sand/30 py-20 px-6 lg:px-12 border-y border-border">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Hospitalidade & Transparência
            </p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Regras pensadas para o seu bem-estar
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Trabalhamos com regras claras e descomplicadas para que sua única preocupação seja aproveitar momentos especiais com quem você ama.
            </p>
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-all"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Tirar Dúvidas com o Anfitrião</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Clock,
                title: "Check-in & Check-out",
                desc: "Entrada a partir das 14h00 e saída até as 12h00. Horários flexíveis combinados conforme agenda.",
              },
              {
                icon: Volume2,
                title: "Convivência Tranquila",
                desc: "Som ambiente é muito bem-vindo durante o dia. Respeito ao silêncio a partir das 22h00.",
              },
              {
                icon: PawPrint,
                title: "Animais de Estimação",
                desc: "Pets de pequeno porte são permitidos mediante aviso prévio para prepararmos o espaço.",
              },
              {
                icon: Users,
                title: "Capacidade Máxima",
                desc: "Limite estipulado de até 10 pessoas para preservar o conforto e o bom uso de toda a casa.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-card border border-border p-5 shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="font-display text-base font-bold text-foreground">{title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações de Hóspedes */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center gap-1 text-accent mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Experiências Reais
            </p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              O que nossos hóspedes dizem
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col justify-between rounded-2xl bg-card border border-border p-8 shadow-xs"
              >
                <div>
                  <div className="flex gap-1 text-accent mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="font-display text-base sm:text-lg italic text-foreground leading-relaxed">
                    “{testimonial.text}”
                  </blockquote>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <cite className="not-italic font-bold text-foreground block text-sm">
                    {testimonial.name}
                  </cite>
                  <span className="text-xs text-muted-foreground">{testimonial.origin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização & Mapa */}
      <section id="localizacao" className="scroll-mt-24 py-20 px-6 lg:px-12 bg-sand/40 border-t border-border">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span>Localização Privilegiada</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
              Jardim Aeroporto, Presidente Epitácio/SP
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              O Recanto Barreto está situado em um bairro tranquilo e seguro, com fácil acesso pavimentado e a poucos minutos dos principais atrativos da cidade: a Orla Fluvial, o Parque O Figueiral, supermercados e conveniências.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jardim+Aeroporto,+Presidente+Epit%C3%A1cio,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:shadow-md"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href="https://waze.com/ul?q=Jardim%20Aeroporto%2C%20Presidente%20Epit%C3%A1cio%2C%20SP&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:shadow-md"
              >
                <Car className="h-4 w-4 text-accent" />
                <span>Navegar pelo Waze</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground">Distâncias Rápidas</h3>
              <ul className="mt-6 divide-y divide-border text-sm">
                <li className="flex justify-between py-3.5">
                  <span className="text-muted-foreground">Orla do Rio Paraná (Pôr do Sol)</span>
                  <span className="font-semibold text-foreground">~ 5 min</span>
                </li>
                <li className="flex justify-between py-3.5">
                  <span className="text-muted-foreground">Parque O Figueiral (Prainha)</span>
                  <span className="font-semibold text-foreground">~ 7 min</span>
                </li>
                <li className="flex justify-between py-3.5">
                  <span className="text-muted-foreground">Centro & Supermercados</span>
                  <span className="font-semibold text-foreground">~ 4 min</span>
                </li>
                <li className="flex justify-between py-3.5">
                  <span className="text-muted-foreground">Píer Turístico & Peixarias</span>
                  <span className="font-semibold text-foreground">~ 6 min</span>
                </li>
              </ul>
              <p className="mt-5 text-xs text-muted-foreground italic">
                * O endereço exato é fornecido imediatamente após a confirmação da sua reserva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes (FAQ) */}
      <section id="faq" className="scroll-mt-24 py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Tudo Explicado
            </p>
            <h2 className="font-display mt-2 text-3xl sm:text-5xl font-bold text-foreground">
              Dúvidas Frequentes
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Separamos as respostas para as dúvidas mais comuns dos nossos hóspedes.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className="py-2">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg sm:text-xl font-bold text-foreground transition-colors hover:text-primary"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary font-mono text-lg transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-6 text-sm sm:text-base text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final com Fundo Imersivo */}
      <section className="relative overflow-hidden bg-forest py-28 text-white">
        <img
          src={churrasqueira}
          alt="Área gourmet"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/80" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-md mb-6">
            <Calendar className="h-3.5 w-3.5" />
            <span>Garanta a sua data com antecedência</span>
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight">
            Seu refúgio em Presidente Epitácio está a uma mensagem de distância.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Feriados prolongados, Natal, Ano Novo e finais de semana costumam esgotar rapidamente. Fale conosco agora mesmo para garantir as melhores condições.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-9 py-4 text-xs font-bold uppercase tracking-[0.16em] text-forest shadow-xl transition-all duration-300 hover:bg-white hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Consultar Disponibilidade no WhatsApp</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-white/60 uppercase tracking-widest font-semibold">
            Atendimento Rápido e Personalizado · (18) 98106-1762
          </p>
        </div>
      </section>

      {/* Rodapé Nobre */}
      <footer className="bg-background border-t border-border py-14 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              Recanto <span className="font-normal italic text-accent">Barreto</span>
            </span>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Rancho para Locação por Temporada · Jardim Aeroporto, Presidente Epitácio/SP
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>(18) 98106-1762</span>
            </a>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Recanto Barreto. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <aside aria-label="Contato rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
        <span className="hidden sm:inline-block rounded-full bg-card/95 border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Reserve sua data
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar conosco no WhatsApp"
          className="animate-whatsapp-pulse flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-all duration-300 hover:scale-110"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </aside>
    </div>
  );
}
