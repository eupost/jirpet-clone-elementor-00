# Guia para Substituição de Imagens - Jirpet

## Estrutura de Imagens do Projeto

### 📁 src/assets/
- `hero-bg.jpg` - Imagem de fallback para o vídeo hero (1920x1080px)
- `f1-dryer.jpg` - Produto F1 Dryer Cabin (800x600px)
- `twin-titan.jpg` - Produto Twin Titan I (800x600px) 
- `harmony-dryer.jpg` - Produto Harmony I (800x600px)

### 📁 public/
- `hero-video.mp4` - Vídeo principal do banner (1920x1080px, 10-30s)
- `og-image.jpg` - Imagem para redes sociais (1200x630px)
- `favicon.ico` - Ícone do site (32x32px)

## Como Substituir as Imagens

### 1. Vídeo Hero (Banner Principal)
```
Arquivo: public/hero-video.mp4
Dimensões: 1920x1080 (Full HD)
Duração: 10-30 segundos
Formato: MP4 (H.264)
Tamanho: Máximo 10MB
```

### 2. Imagens de Produtos
```
Arquivos: src/assets/[produto].jpg
Dimensões: 800x600px (4:3)
Formato: JPG ou PNG
Qualidade: Alta resolução para zoom
```

### 3. Imagem de Fallback Hero
```
Arquivo: src/assets/hero-bg.jpg
Dimensões: 1920x1080px
Formato: JPG
Uso: Exibida enquanto o vídeo carrega
```

## Instruções de Substituição

1. **Mantenha os mesmos nomes de arquivo** para substituição automática
2. **Respeite as dimensões recomendadas** para melhor resultado
3. **Otimize as imagens** antes de substituir (comprima sem perder qualidade)
4. **Teste em diferentes dispositivos** após a substituição

## Dicas de Otimização

- Use ferramentas como TinyPNG para comprimir imagens
- Para o vídeo hero, use compressão H.264 com qualidade média-alta
- Mantenha o vídeo curto (10-30s) para melhor performance
- Considere criar uma versão mobile menor do vídeo se necessário

## Integração com WooCommerce

Os cards de produtos já estão preparados para integração com WooCommerce:
- Estrutura de preços em Real (R$)
- Botões "Adicionar ao Carrinho" prontos
- Layout responsivo para diferentes tamanhos de tela
- Hover effects e animações incluídos