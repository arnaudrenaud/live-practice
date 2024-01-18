import { Weather } from "./Weather";

async function main() {
  const weatherForLille = new Weather("Lille");
  await weatherForLille.setCurrent();
  weatherForLille.print();
}

main();
