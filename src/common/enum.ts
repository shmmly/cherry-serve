import { registerEnumType } from 'type-graphql';

export enum State {
  UNDELETE = 0,
  DELETE = 1,
  INLINE = 2,
  OFFLINE = 3,
}

registerEnumType(State, {
  name: 'State',
  description: 'all state in this system',
});
