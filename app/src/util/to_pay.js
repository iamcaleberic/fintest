// pass customer supplied amount
export default function toPay(amount) {
  // method to calculate amount to pay for transfer
  // amount = 100 %
  //  ?     = 109.5 %
  // exchange rate = 1 USD = 100 KES
  // finplus charge 2%
  // Remmitance charge 1.5%
  // paypal 3%
  // mpesa 22 KES
  // bank 40 KES
  // total percentage 2 + 3 + 3 + 1.5 = 9.5
  // add bank and mpesa after

  let finalAmount, beforeFinal

  beforeFinal = ( amount * 109.5) / 100
  finalAmount = beforeFinal + 40 + 22
  // return USD
  return finalAmount / 100
}
