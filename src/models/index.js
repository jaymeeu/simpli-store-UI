// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Order, Item, User } = initSchema(schema);

export {
  Cart,
  Order,
  Item,
  User
};