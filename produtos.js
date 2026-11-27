/*
  ===========================================================
  TKL STORE — LISTA DE PRODUTOS DA VITRINE
  ===========================================================
  Para atualizar a vitrine, edite SÓ este arquivo.

  status pode ser:
    "disponivel"  -> mostra "Disponível"
    "ultimas"     -> mostra "Últimas unidades"
    "esgotado"    -> mostra "Esgotado" (botão vira "Avise-me")
    "encomenda"   -> mostra "Sob encomenda"
    "embreve"     -> mostra "Em breve" (sem preço)

  foto: nome do arquivo dentro da pasta images/
        deixe "" (vazio) para usar a arte padrão da TKL.
  ===========================================================
*/

const WHATSAPP = "5592999911298";
const INSTAGRAM = "tklstoream";

const PRODUTOS = [
  // ---------- LENÇOS 90x90 ----------
  { categoria: "Lenços", nome: "Lenço Bustos Turenko", tamanho: "90 × 90 cm", preco: 130, status: "disponivel", foto: "lenco-bustos-turenko.jpg", descricao: "Bustos amazônidas em preto e branco." },
  { categoria: "Lenços", nome: "Lenço Garantido", tamanho: "90 × 90 cm", preco: 130, status: "disponivel", foto: "", descricao: "Homenagem ao boi vermelho de Parintins." },
  { categoria: "Lenços", nome: "Lenço Caprichoso", tamanho: "90 × 90 cm", preco: 130, status: "disponivel", foto: "", descricao: "Homenagem ao boi azul de Parintins." },
  { categoria: "Lenços", nome: "Lenço Pirarucu Preto", tamanho: "90 × 90 cm", preco: 130, status: "ultimas", foto: "lenco-pirarucu.jpg", descricao: "O gigante dos rios amazônicos em escamas gráficas." },
  { categoria: "Lenços", nome: "Lenço Borboleta", tamanho: "90 × 90 cm", preco: 130, status: "ultimas", foto: "lenco-borboleta.jpg", descricao: "Borboletas e grafismos em cores vivas." },

  // ---------- LENÇOS 70x70 ----------
  { categoria: "Lenços", nome: "Lenço Bustos Turenko", tamanho: "70 × 70 cm", preco: 100, status: "disponivel", foto: "lenco-bustos-turenko.jpg", descricao: "Versão menor, ideal para pescoço e bolsa." },
  { categoria: "Lenços", nome: "Lenço Pirarucu Colorido", tamanho: "70 × 70 cm", preco: 100, status: "ultimas", foto: "lenco-pirarucu-praia.jpg", descricao: "Pirarucu em tons vibrantes." },
  { categoria: "Lenços", nome: "Lenço Pirarucu Preto", tamanho: "70 × 70 cm", preco: 100, status: "ultimas", foto: "lenco-pirarucu.jpg", descricao: "Pirarucu em preto, branco e vermelho." },

  // ---------- BOLSAS ----------
  { categoria: "Bolsas", nome: "Bolsa Caprichoso", tamanho: "Bordado do boi aplicado", preco: 130, status: "disponivel", foto: "", descricao: "Sacola com o boi azul costurado à mão." },
  { categoria: "Bolsas", nome: "Bolsa Garantido", tamanho: "Bordado do boi aplicado", preco: 130, status: "ultimas", foto: "", descricao: "Sacola com o boi vermelho costurado à mão." },

  // ---------- PRATOS ----------
  { categoria: "Pratos", nome: "Prato Piranha", tamanho: "26 a 28 cm", preco: 95, status: "disponivel", foto: "", descricao: "Cardume de piranhas em porcelana." },
  { categoria: "Pratos", nome: "Prato Pirarucu", tamanho: "26 a 28 cm", preco: 95, status: "ultimas", foto: "prato-pirarucu.jpg", descricao: "Pirarucus entrelaçados em escamas." },
  { categoria: "Pratos", nome: "Prato Borboleta", tamanho: "26 a 28 cm", preco: 95, status: "esgotado", foto: "prato-borboleta.jpg", descricao: "Mandala de borboletas em cores amazônicas." },

  // ---------- XÍCARAS E CANECAS ----------
  { categoria: "Xícaras e canecas", nome: "Jogo de xícaras Teatro Amazonas", tamanho: "6 xícaras", preco: 150, status: "ultimas", foto: "", descricao: "Jogo com 6 xícaras estampadas." },
  { categoria: "Xícaras e canecas", nome: "Caixa 4 xícaras e pires Borboleta", tamanho: "4 conjuntos + caixa com palha", preco: null, status: "embreve", foto: "xicara-pires.jpg", descricao: "Caixa presente com xícaras e pires estampados." },
  { categoria: "Xícaras e canecas", nome: "Canequinha Bustos", tamanho: "80 ml", preco: 65, status: "encomenda", foto: "", descricao: "Mini caneca para café com bustos coloridos." },
];
