# Landing Page — Recanto Barreto (Presidente Epitácio/SP)

Landing page de alta conversão para locação por temporada, com foco em levar o visitante ao WhatsApp.

## Dados reais (extraídos do panfleto)
- Nome: Recanto Barreto — "Seu refúgio em Presidente Epitácio"
- WhatsApp: (18) 98106-1762 → links via api.whatsapp.com/send com mensagem pré-preenchida
- Local: Jardim Aeroporto, Presidente Epitácio/SP
- Capacidade: até 10 pessoas, 2 quartos (1 suíte)
- Comodidades: Piscina, Sinuca, Ar-condicionado e TV, Eletrodomésticos e freezer
- Destaques: Disponível Natal e Ano Novo; pagamento em 3x

## Identidade visual
- Títulos: Lora (serifada acolhedora); corpo: Nunito Sans
- Paleta quente de natureza: verde-mata profundo, areia/pedra, amarelo-sol como acento (sem roxos de SaaS)
- Clima: lazer em família, tranquilidade, contato com a natureza

## Estrutura da página (src/routes/index.tsx)
1. Header fixo com nome do rancho, navegação suave e botão WhatsApp
2. Hero: foto da piscina, chamada de impacto, capacidade, CTAs (WhatsApp + Ver Fotos), badges (Wi-Fi, Piscina, Ar-condicionado)
3. Galeria: carrossel com toque/arraste + lightbox em tela cheia com legendas por ambiente
4. Grid de comodidades com ícones
5. Sobre o rancho + Regras da casa (check-in/out, pets, som)
6. Localização: botão "Abrir no Google Maps/Waze" + instruções de acesso
7. Depoimentos com estrelas
8. FAQ em acordeão (reserva, caução, pets, roupa de cama)
9. CTA final de destaque ("Garanta sua data — Natal e Ano Novo disponíveis")
10. Rodapé com contato e links rápidos
11. Botão flutuante de WhatsApp pulsante, fixo no canto inferior direito

## Fotos
- Extrair as fotos reais do panfleto enviado (piscina, área gourmet, quarto, churrasqueira, mesa de sinuca) para hero e galeria; gerar imagens complementares apenas se necessário.

## Técnico
- Mobile-first, totalmente responsivo
- SEO: title/description com cidade, Open Graph, JSON-LD LodgingBusiness
- Sem backend — página estática em React/Tailwind no TanStack Start

## Conteúdo que vou inventar (confirmar depois)
- Textos de depoimentos, regras da casa e FAQ serão exemplos realistas para você revisar/ajustar.
