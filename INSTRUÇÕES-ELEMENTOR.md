# 🎯 JIRPET - TEMPLATE PARA ELEMENTOR PRO

## 📋 INSTRUÇÕES DE IMPLEMENTAÇÃO

### 🔧 MÉTODO 1: IMPORTAÇÃO DIRETA (RECOMENDADO)

1. **Copie o código HTML completo** do arquivo `jirpet-elementor-template.html`
2. **No Elementor Pro**: 
   - Crie uma nova página
   - Adicione um widget **"HTML"** 
   - Cole todo o código HTML/CSS/JS
   - Publique a página

### 🏗️ MÉTODO 2: ESTRUTURA POR SEÇÕES (MANUAL)

#### **SEÇÃO 1: HEADER FIXO**
```
Estrutura: Container Full Width
├── Column (100%)
    ├── Nav Menu Widget
    ├── Site Logo Widget  
    └── Custom HTML: <span class="cart">🛒 Login / $0.00</span>

CSS Personalizado da Seção:
```css
position: fixed;
top: 0;
z-index: 1000;
background: rgba(255,255,255,0.95);
backdrop-filter: blur(10px);
```

#### **SEÇÃO 2: HERO**
```
Estrutura: Container Full Width (altura: 100vh)
├── Background: Imagem + Overlay escuro (40%)
├── Column (100%)
    ├── Heading H1: "Smart Drying. Real Results."
    ├── Text: "Explore Infinite Possibilities in Pet Grooming"  
    ├── Buttons: 
        ├── Button Primário: "Explore Products"
        └── Button Secundário: "Watch Demo"

CSS da Seção:
```css
min-height: 100vh;
display: flex;
align-items: center;
text-align: center;
color: white;
```

#### **SEÇÃO 3: PRODUTOS EM DESTAQUE**
```
Para cada produto, crie uma seção:
Estrutura: Container Full Width
├── Column 50% (Conteúdo)
│   ├── Heading H2: Nome do produto
│   ├── Text: Descrição
│   └── Button: "Read More"
└── Column 50% (Imagem)
    └── Image Widget + hover effects

Alternar layout (Row Reverse) para produtos pares.
```

#### **SEÇÃO 4: GRID DE PRODUTOS**
```
Estrutura: Container Full Width
├── Heading H2: "Our Products"
├── Container Grid (3 colunas)
    ├── Column 33% × 3
        ├── Image Widget
        ├── Heading H3: Nome
        ├── Text: Descrição  
        ├── Price Display (HTML personalizado)
        └── Button: "SHOP NOW"
```

#### **SEÇÃO 5: ESTATÍSTICAS**
```
Estrutura: Container Full Width
├── Background: Gradiente escuro
├── Heading H2: "Global Sales No.1..."
├── Icon Widget: Certificado
├── Container Grid (5 colunas)
    └── Para cada stat:
        ├── Icon Widget
        ├── Counter Widget: Número
        ├── Heading H4: Label
        └── Text: Descrição
```

#### **SEÇÃO 6: DEPOIMENTOS**
```
Estrutura: Container Full Width  
├── Heading H2: "Professional Choice"
├── Container Grid (2 colunas)
    ├── Column 50% (Conteúdo)
    │   ├── Testimonial Widget
    │   └── Navigation buttons
    └── Column 50% (Visual)
        └── Image/Visual element
```

#### **SEÇÃO 7: BENEFÍCIOS (FOOTER)**
```
Estrutura: Container Full Width
├── Background: Cor escura
├── Heading H2: "Why Buy from Jirpet.com?"
├── Container Grid (4 colunas)
    └── Para cada benefício:
        ├── Icon Widget
        ├── Heading H3: Título
        └── Text: Descrição
```

## 🎨 CSS PERSONALIZADO GLOBAL

**Adicione no Elementor > Personalizar > CSS Adicional:**

```css
/* CORES JIRPET */
:root {
    --jirpet-orange: #FF5722;
    --jirpet-orange-light: #FF7043;
    --jirpet-dark: #2E3440;
    --jirpet-gray: #64748B;
}

/* BOTÕES PERSONALIZADOS */
.elementor-button.jirpet-primary {
    background: linear-gradient(135deg, var(--jirpet-orange), var(--jirpet-orange-light)) !important;
    border: none !important;
    box-shadow: 0 10px 15px -3px rgba(46, 52, 64, 0.1);
    transition: all 0.3s ease;
}

.elementor-button.jirpet-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(255, 87, 34, 0.3);
}

.elementor-button.jirpet-secondary {
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2) !important;
}

/* CARDS */
.elementor-widget-wrap.jirpet-card {
    background: white;
    border-radius: 18px;
    padding: 32px;
    box-shadow: 0 10px 15px -3px rgba(46, 52, 64, 0.1);
    transition: all 0.3s ease;
}

.elementor-widget-wrap.jirpet-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 30px rgba(255, 87, 34, 0.3);
}

/* ANIMAÇÕES */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.elementor-invisible {
    animation: fadeInUp 1s ease-out forwards;
}

/* TIPOGRAFIA */
.jirpet-title {
    font-weight: 700 !important;
    color: var(--jirpet-dark) !important;
    line-height: 1.1 !important;
}

.jirpet-highlight {
    color: var(--jirpet-orange) !important;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .elementor-container {
        padding: 20px !important;
    }
    
    .elementor-grid {
        grid-template-columns: 1fr !important;
    }
}
```

## 🖼️ SUBSTITUIÇÃO DE IMAGENS

### **Produtos (usar estas imagens ou similares):**
- **F1 Dryer**: Máquina de secar pets tipo cabine, cor branca/laranja
- **Twin Titan**: Secador de força duplo motor, design industrial  
- **Harmony**: Secador de pescoço compacto, design inovador

### **Hero Background:**
- Pet grooming salon interior, lighting profissional
- Resolução mínima: 1920x1080px

### **Placeholders fornecidos:**
Os SVGs no código servem como placeholders. Substitua pelos produtos reais.

## ⚡ FUNCIONALIDADES JAVASCRIPT

### **Modal de Desconto:**
```javascript
// Adicionar em Widget HTML ou Custom Code
<script>
setTimeout(() => {
    // Mostrar modal após 3 segundos
    document.querySelector('.discount-modal').style.display = 'flex';
}, 3000);
</script>
```

### **Scroll Suave:**
```javascript
// Para navegação entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

## 🔧 CONFIGURAÇÕES ELEMENTOR

### **Configurações de Seção:**
- **Layout**: Full Width (100vw)
- **Gap**: 0px entre colunas para seções hero/destaque
- **Padding**: 80px top/bottom para seções de conteúdo

### **Configurações de Coluna:**
- **Align**: Center (vertical) para conteúdo centralizado
- **Width**: Usar % ou fr units para responsividade

### **Widgets Recomendados:**
- **Heading**: Para títulos principais
- **Text Editor**: Para parágrafos e descrições
- **Button**: Para CTAs (personalizar com classes CSS)
- **Image**: Para produtos e backgrounds
- **Icon**: Para benefícios e estatísticas
- **Counter**: Para números de estatísticas
- **HTML**: Para códigos personalizados

## 📱 RESPONSIVIDADE

### **Breakpoints Importantes:**
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px  
- **Mobile**: até 767px

### **Ajustes Mobile:**
- Headers: Reduzir de 6xl para 4xl
- Grids: Transformar em 1 coluna
- Padding: Reduzir de 80px para 40px
- Font sizes: Reduzir proporcionalmente

## 🎯 INTEGRAÇÃO WOOCOMMERCE

### **Para os cards de produto:**
```php
// Adicionar em Functions.php ou Plugin personalizado
add_shortcode('jirpet_product', function($atts) {
    $product_id = $atts['id'];
    $product = wc_get_product($product_id);
    
    return '
    <div class="jirpet-product-card">
        ' . $product->get_image() . '
        <h3>' . $product->get_name() . '</h3>
        <p>' . $product->get_short_description() . '</p>
        <div class="price">' . $product->get_price_html() . '</div>
        <a href="' . $product->get_permalink() . '" class="btn-primary">SHOP NOW</a>
    </div>';
});
```

### **Usar shortcode no Elementor:**
```
[jirpet_product id="123"]
```

## ✅ CHECKLIST FINAL

- [ ] Header fixo funcionando
- [ ] Hero com vídeo/imagem de background  
- [ ] Seções de produtos com layout alternado
- [ ] Grid de produtos responsivo
- [ ] Modal de desconto funcionando
- [ ] Animações CSS ativas
- [ ] Responsividade testada
- [ ] Integração WooCommerce (se necessário)
- [ ] SEO tags implementadas
- [ ] Performance otimizada

## 🚀 OTIMIZAÇÕES DE PERFORMANCE

### **CSS:**
- Minificar código CSS customizado
- Usar will-change apenas quando necessário
- Otimizar animações para GPU

### **Imagens:**
- Formato WebP quando possível
- Lazy loading ativo
- Compressão adequada (qualidade 80-85%)

### **JavaScript:**
- Minificar códigos customizados
- Usar event delegation quando possível
- Evitar bibliotecas desnecessárias

---

## 📞 SUPORTE

Para dúvidas ou ajustes, todos os estilos estão bem documentados e podem ser facilmente modificados através do CSS personalizado do Elementor.

**Template baseado 100% no site original Jirpet.com com fidelidade total ao design e funcionalidades.**