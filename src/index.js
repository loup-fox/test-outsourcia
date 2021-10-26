console.log("coucou");

const sample_2 = [
  {
    type: "User",
    name: "John Doe",
    address: "1 rue de Metz 75010 Paris France",
  },
  {
    type: "Order",
    date: undefined,
    currency: "EUR",
    promo: 0,
    totalPaid: 5.91,
    orderItemQuantity: 1,
    originalOrderNumber: "171-6376299-7098734",
  },
  {
    type: "OrderItem",
    name: "Piles CR2032 - Lot de 10 |GP Extra |Bouton Lithium CR 2032 3V- Haute Performance",
    currency: "EUR",
    pricePerUnit: 26.75,
    deliveryAddress: "1 rue de Metz 75010 Paris France",
    deliveryDate: "2021/6/28",
    deliveryType: "Livraison Prioritaire",
    seller: "Ma Santé",
    reference: "B015EN4L9S",
    urlItem:
      "https://www.amazon.fr/gp/r.html?C=2FDG0CTK64HKA&K=2AVT2CMHSL74P&M=urn:rtn:msg:202106272116141d236698d09248e589404f0a4a30p0eu&R=1ZD05QJY407CP&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fdp%2FB07QLZ3DGG%2Fref%3Dpe_27091421_487052621_TE_item&H=KZ34WHOTPAQ4UQNBW9XR1IDHTL0A&ref_=pe_27091421_487052621_TE_item",
  },
];
// Expected structure for results
const sample_1 = [
  {
    type: "User",
    name: "John Doe",
    address: "1 rue de Metz 75010 Paris France",
  },
  {
    type: "Order",
    date: "2021/3/5",
    currency: "EUR",
    promo: 4.99,
    totalPaid: 26.75,
    orderItemQuantity: 1,
    originalOrderNumber: "405-7425339-9834754",
  },
  {
    type: "OrderItem",
    name: "SILETTUM Lot 2+1 offert Fourreau (180 Gélules) | Beauté et Vitalité des cheveux | Pour les cheveux ternes, fins, cassants, en perte de volume | Redonne beauté, vitalité et volume aux cheveux",
    currency: "EUR",
    pricePerUnit: 26.75,
    deliveryAddress: "1 rue de Metz 75010 Paris France",
    deliveryDate: "2021/3/9",
    deliveryType: "Livraison Standard",
    seller: "Ma Santé",
    reference: "B015EN4L9S",
    urlItem:
      "https://www.amazon.fr/gp/r.html?C=3GJ5U8VQGVINW&K=2D8EL7K31WG3A&M=urn:rtn:msg:20210305113759d4e64fd988dc4848b2890799f150p0eu&R=FV62WI8WJKFD&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fdp%2FB015EN4L9S%2Fref%3Dpe_3044141_185740131_TE_item&H=9JZ1MAALXAFALRRVEWCU7VQIGXGA&ref_=pe_3044141_185740131_TE_item",
  },
];
