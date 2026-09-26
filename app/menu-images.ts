const photos = {
  salchipapa: "https://images.pexels.com/photos/14018214/pexels-photo-14018214.png?auto=compress&cs=tinysrgb&w=1100&q=88",
  empanadas: "https://images.pexels.com/photos/37025257/pexels-photo-37025257.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  arepa: "https://images.pexels.com/photos/29465175/pexels-photo-29465175.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  burger: "https://images.pexels.com/photos/2282537/pexels-photo-2282537.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  chickenBurger: "https://images.pexels.com/photos/1431305/pexels-photo-1431305.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  ribs: "https://images.pexels.com/photos/29203383/pexels-photo-29203383.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  juice: "https://images.pexels.com/photos/31823004/pexels-photo-31823004.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  soda: "https://images.pexels.com/photos/17006170/pexels-photo-17006170.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  beer: "https://images.pexels.com/photos/13027755/pexels-photo-13027755.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
  cocktail: "https://images.pexels.com/photos/7259042/pexels-photo-7259042.jpeg?auto=compress&cs=tinysrgb&w=1100&q=88",
} as const;

export function menuPhoto(groupId: string, name: string) {
  const dish = name.toLocaleLowerCase();

  if (groupId === "bebidas") return dish.includes("jugo") || dish.includes("zumo") ? photos.juice : photos.soda;
  if (groupId === "cervezas") return photos.beer;
  if (groupId === "cocteles") return photos.cocktail;
  if (dish.includes("hamburguesa")) return dish.includes("pollo") ? photos.chickenBurger : photos.burger;
  if (dish.includes("costilla") || dish.includes("chicharrón") || dish.includes("picada") || dish.includes("bofe")) return photos.ribs;
  if (dish.includes("empanada") || dish.includes("papa rellena") || dish.includes("marranita")) return photos.empanadas;
  if (dish.includes("arepa") || dish.includes("patacón") || dish.includes("maduro") || dish.includes("aborrajado")) return photos.arepa;
  if (dish.includes("chorizo")) return photos.salchipapa;
  return photos.salchipapa;
}

export const featuredMenuPhotos = {
  salchiford: photos.salchipapa,
  picada: photos.ribs,
  antojitos: photos.empanadas,
} as const;
