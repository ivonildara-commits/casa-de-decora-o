/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, StyleTheme, RoomType } from './types';

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Itens' },
  { id: 'mobiliario', label: 'Mobiliário' },
  { id: 'iluminacao', label: 'Iluminação' },
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'arte', label: 'Arte & Objetos' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Poltrona Bouclé Minimalista',
    category: 'mobiliario',
    price: 3450.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop',
    description: 'Poltrona estofada em tecido boucle premium de alta densidade. Base giratória oculta em carvalho maciço. Conforto exuberante com linhas curvas orgânicas inspiradas no design escandinavo contemporâneo.',
    dimensions: '82cm x 80cm x 75cm',
    material: 'Tecido Bouclé e Madeira Carvalho',
    colors: ['#F5F5F0', '#E5E0D8', '#A2917F']
  },
  {
    id: 'p2',
    name: 'Luminária de Piso Esfera Latão',
    category: 'iluminacao',
    price: 1290.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop',
    description: 'Luz difusa sofisticada com cúpulas de vidro soprado jateado e haste fina em latão escovado. Regulagem de intensidade suave, ideal para salas de estar ou leitura.',
    dimensions: '165cm altura x 30cm largura',
    material: 'Latão Escovado e Vidro Soprado',
    colors: ['#D4AF37', '#1C1C1C']
  },
  {
    id: 'p3',
    name: 'Vasos Cerâmicos Esculturais (Trio)',
    category: 'acessorios',
    price: 480.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=600&auto=format&fit=crop',
    description: 'Arranjo de três peças modeladas artesanalmente com silhuetas brutas e acabamento texturizado pálido. Uma ode à estética Wabi-Sabi.',
    dimensions: 'Variadas (20cm a 35cm de altura)',
    material: 'Cerâmica Queimada de Alta Temperatura',
    colors: ['#ECE3D4', '#DFD3C3', '#C7B198']
  },
  {
    id: 'p4',
    name: 'Aparador Suspenso Carvalho Preto',
    category: 'mobiliario',
    price: 4200.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop',
    description: 'Móvel elegante com portas em palha de vime natural tingida e estrutura de carvalho ebonizado. Portas com sistema toque-para-abrir.',
    dimensions: '180cm x 40cm x 45cm',
    material: 'Carvalho Ebonizado e Palha de Vime Natural',
    colors: ['#1A1A1A', '#CBB295']
  },
  {
    id: 'p5',
    name: 'Almofada Linho Rústico Texturizada',
    category: 'acessorios',
    price: 185.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop',
    description: 'Almofada de linho puríssimo com franjas sutis desfiadas à mão e recheio de pluma sintética ecológica antialérgica.',
    dimensions: '50cm x 50cm',
    material: '100% Linho com enchimento de Fibra de Bambu',
    colors: ['#CDBBA7', '#DCD4C4', '#A89481']
  },
  {
    id: 'p6',
    name: 'Pendente Bronze Esculpido Lunar',
    category: 'iluminacao',
    price: 940.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=600&auto=format&fit=crop',
    description: 'Pendente moderno com textura lunar na cúpula de alumínio batido à mão e acabamento interno folheado em folhas de bronze de alta refletividade.',
    dimensions: '40cm diâmetro',
    material: 'Alumínio forjado e Folhas metálicas de bronze',
    colors: ['#5A4D41', '#BCA07D']
  },
  {
    id: 'p7',
    name: 'Tela Abstrata "Ecos da Terra" I',
    category: 'arte',
    price: 1800.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop',
    description: 'Pintura original texturizada com aplicação de gesso e pigmentos minerais de argila natural. Moldura em perfil fino de cedro rosa.',
    dimensions: '120cm x 90cm',
    material: 'Acrílica e Gesso sobre Tela de Algodão, Moldura Cedro',
    colors: ['#E6DFD3', '#C97A52', '#3E4E50']
  },
  {
    id: 'p8',
    name: 'Mesa Lateral em Travertino Romano',
    category: 'mobiliario',
    price: 2890.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    description: 'Formas geométricas robustas e puras esculpidas em bloco único de mármore Travertino Romano com acabamento fosco e poros naturais preservados.',
    dimensions: '45cm x 45cm x 50cm',
    material: 'Mármore Travertino Romano original',
    colors: ['#EAE5DC', '#D1C7BD']
  }
];

export const STYLE_THEMES: StyleTheme[] = [
  {
    id: 'japandi',
    name: 'Japandi Moderno',
    description: 'O encontro perfeito entre o minimalismo japonês e o calcor rústico escandinavo. Foco em simplicidade, materiais naturais, tons arenosos e linhas puras.',
    colors: {
      id: 'japandi_palette',
      name: 'Nuvens de Outono',
      description: 'Cores serenas que acalmam o olhar e respiram suavidade.',
      primary: '#ECE3D4', // Sand/Beige
      secondary: '#4E4637', // Deep soil brown
      accent: '#B08E66', // Golden honey
      background: '#F5F2EB', // Creamy white
      textColor: '#2C2A29' // Warm charcoal
    },
    roomImages: {
      sala: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      quarto: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
      escritorio: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
      jantar: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=800&auto=format&fit=crop'
    },
    suggestion: 'Combine cerâmicas orgânicas com folhagens secas de bambu ou eucalipto. Prefira tapetes de fibras de sisal ou lã virgem crua.'
  },
  {
    id: 'terracotta',
    name: 'Rústico Terracota',
    description: 'Inspirado em vilas ensolaradas mediterrâneas e argila cozida. Cores quentes que abraçam, misturando-se a detalhes têxteis ricos e madeiras de demolição.',
    colors: {
      id: 'terracotta_palette',
      name: 'Solo de Argila',
      description: 'Pigmentos minerais da terra que trazem aconchego imediato.',
      primary: '#C97A52', // Warm terracotta
      secondary: '#8E4832', // Deep clay red
      accent: '#E3C16F', // Mustard ochre
      background: '#FAF5EF', // Parchment white
      textColor: '#3A2E2B' // Dark cocoa
    },
    roomImages: {
      sala: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
      quarto: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
      escritorio: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=800&auto=format&fit=crop',
      jantar: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop'
    },
    suggestion: 'Use vasos de terracota natural em diferentes alturas, tecidos de linho encorpados em tom cru e móveis em madeira rústica e texturizada.'
  },
  {
    id: 'nordic',
    name: 'Minimalismo Nórdico',
    description: 'Estética fria equilibrada com extrema luminosidade. Utilização abundante de branco, cinza suave, metais pretos industriais e madeira pinus clara.',
    colors: {
      id: 'nordic_palette',
      name: 'Brumas de Inverno',
      description: 'Luminosidade fria contrastada com elementos monocromáticos.',
      primary: '#D6DBD9', // Soft pale gray
      secondary: '#2B303A', // Nordic graphite
      accent: '#8C9A9E', // Sage/slate blue
      background: '#F9FAFB', // Stark clinical white
      textColor: '#1F2937' // Cool charcoal
    },
    roomImages: {
      sala: 'https://images.unsplash.com/photo-1615529182906-134d77411d1a?q=80&w=800&auto=format&fit=crop',
      quarto: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
      escritorio: 'https://images.unsplash.com/photo-1505409859467-3a796cb5788c?q=80&w=800&auto=format&fit=crop',
      jantar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
    },
    suggestion: 'Excelente para espaços compactos. Maximize a entrada de iluminação natural com cortinas translúcidas e utilize quadros abstratos pretos e brancos.'
  },
  {
    id: 'industrial',
    name: 'Industrial Urbano',
    description: 'Visual moderno com toques vintage. Destaque em tijolo aparente, couro envelhecido marrom, estruturas em ferro fundido e fiação elétrica aparente.',
    colors: {
      id: 'industrial_palette',
      name: 'Metais Urbanos',
      description: 'Tons de metais escovados, ferrugem e concreto exposto.',
      primary: '#5E6064', // Steel gray
      secondary: '#1A1C20', // Iron black
      accent: '#C18C5D', // Vintage camel leather
      background: '#EAEAEA', // Light concrete gray
      textColor: '#22252A' // Dark soot
    },
    roomImages: {
      sala: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      quarto: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
      escritorio: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      jantar: 'https://images.unsplash.com/photo-1530018607912-eff2df114f12?q=80&w=800&auto=format&fit=crop'
    },
    suggestion: 'Invista em luminárias pendentes em metal escuro, vigas decorativas aparentes e poltronas robustas revestidas em couro envelhecido.'
  }
];

export const GALLERY_ROOMS = [
  {
    id: 'g1',
    title: 'Estúdio Integrado Industrial',
    category: 'Salas',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=850&auto=format&fit=crop',
    description: 'Uso de concreto aparente e tubulação charmosa combinados a assentos modernos de alta maciez.'
  },
  {
    id: 'g2',
    title: 'Dormitório Suave Sand',
    category: 'Quartos',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=850&auto=format&fit=crop',
    description: 'Cores pastéis arenosas e cabeceira de cama texturizada ideal para desaceleração mental.'
  },
  {
    id: 'g3',
    title: 'Refeitório Clássico Orgânico',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=850&auto=format&fit=crop',
    description: 'Mesa redonda em nogueira maciça rodeada por cadeiras com palha natural de bananeira e pendente de vidro.'
  },
  {
    id: 'g4',
    title: 'Escritório de Soluções Criativas',
    category: 'Escritórios',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=850&auto=format&fit=crop',
    description: 'Organização minimalista com luz periférica agradável e móveis ergonômicos escandinavos.'
  },
  {
    id: 'g5',
    title: 'Lounge Conceito Wabi-Sabi',
    category: 'Salas',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=850&auto=format&fit=crop',
    description: 'Cantos arredondados, nichos embutidos na parede e móveis de baixa altura rente ao chão.'
  },
  {
    id: 'g6',
    title: 'Quarto Infuso em Sage e Linho',
    category: 'Quartos',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=850&auto=format&fit=crop',
    description: 'Enxovais em linho puro verde salvia contrastados por madeira pinus reflorestada.'
  }
];

export const FAQS = [
  {
    question: 'Vocês vendem os móveis prontos ou fazem sob medida?',
    answer: 'Nós oferecemos as duas modalidades! Nossa curadoria conta com peças de designers renomados prontas para entrega e, além disso, nosso estúdio desenvolve projetos de marcenaria sob medida customizados para o seu espaço físico.'
  },
  {
    question: 'Como funciona o serviço de consultoria de design online?',
    answer: 'É extremamente simples. Você preenche nosso formulário enviando fotos e dimensões do ambiente. Nossa equipe de arquitetos cria um painel semântico (Moodboard), planta baixa com disposição dos móveis (Layout de Plantas) e uma lista de compras interativa de acordo com seu orçamento.'
  },
  {
    question: 'Qual o prazo de entrega padrão para itens do catálogo?',
    answer: 'Para acessórios e luminárias prontas em estoque, o prazo estimado é de 5 a 10 dias úteis para todo o Brasil. Para mobiliário manufaturado sob demanda, o prazo varia entre 25 a 40 dias devido ao processo artesanal de acabamento.'
  },
  {
    question: 'Vocês criam projetos para ambientes comerciais também?',
    answer: 'Sim, projetamos escritórios corporativos, hotéis, restaurantes e lojas conceito. Adaptamos nossa filosofia de design aconchegante para criar ambientes de trabalho produtivos e acolhedores.'
  },
  {
    question: 'Posso selecionar paletas de cores customizadas?',
    answer: 'Com certeza! No nosso simulador interativo nesta página você pode testar diferentes combinações. Nossos consultores também estão prontos para formular pigmentos exclusivos para a sua pintura de parede de acordo com a sua escolha de decoração.'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Helena Vasconcellos',
    role: 'Proprietária - Apartamento Itaim',
    text: 'A experiência de redecorar minha sala com a curadoria deles superou tudo. As peças têm uma alma única. O espaço parece mais amplo, respirável e extremamente sofisticado.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Felipe & Gabriel',
    role: 'Estúdio de Gastronomia',
    text: 'O projeto comercial que elaboramos deu outra cara ao nosso bistrô. Nossos clientes elogiam a harmonia da iluminação e a textura rústica de terracota das paredes.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Beatriz Martins',
    role: 'Home Office Moderno',
    text: 'Adotei o estilo Japandi no meu escritório e minha produtividade triplicou. A organização visual acalma a mente em dias tensos. Atendimento impecável do início ao fim.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  }
];
