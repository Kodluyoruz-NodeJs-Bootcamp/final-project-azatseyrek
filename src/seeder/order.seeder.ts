import faker from "@faker-js/faker";
import { randomInt } from "crypto";
import { createConnection, getManager } from "typeorm";
import { OrderItem } from "../entity/order-item.entity";
import { Order } from "../entity/order.entity";

createConnection().then(async (connection) => {
  const orderRepository = getManager().getRepository(Order);
  const orderItemRepository = getManager().getRepository(OrderItem);

  for (let i = 0; i < 30; i++) {
    const order = await orderRepository.save({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
    });
    // This loop randomly gives to us  how many order we have
    for (let j = 0; j < randomInt(1, 5); j++) {
        await orderItemRepository.save({
            order,
            product_title: faker.lorem.words(2),
            price: randomInt(10, 100),
            quantity: randomInt(1, 5),
        });
    }
    }

  process.exit(0);
});
