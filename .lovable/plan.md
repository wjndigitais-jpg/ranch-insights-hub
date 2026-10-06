# Trocar o favicon para o emblema do Recanto Barreto

## O que será feito

O usuário enviou o emblema circular do rancho (piscina, casa, pôr do sol e palmeira) e quer que ele seja o favicon do site (o ícone que aparece na aba do navegador e nos favoritos).

## Passos

1. **Copiar a imagem enviada para `public/favicon.png`**, redimensionada e centralizada em um quadrado 64x64 (sem esticar; a imagem já é quadrada com o emblema circular no centro, então o fundo branco ao redor permanece). O favicon precisa ser um arquivo real em `public/` — não pode usar o arquivo enviado direto do upload.
2. **Atualizar o `src/routes/__root.tsx`**: trocar o link atual `{ rel: "icon", href: "/favicon.ico" }` por `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
3. **Remover o `public/favicon.ico`** (o ícone padrão do Lovable) para que navegadores que ignoram a tag não mostrem o ícone antigo.

## Detalhes técnicos

- Comando de redimensionamento: `magick <upload> -resize 64x64 -background none -gravity center -extent 64x64 public/favicon.png`
- Nenhuma outra parte do site muda: layout, textos e fotos permanecem iguais.
- Verificação: conferir no preview que a aba/navegador carrega o novo ícone e que o build fica sem erros.
