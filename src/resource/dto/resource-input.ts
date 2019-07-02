import { Resource } from '../model/resource';
import { InputType } from 'type-graphql';

@InputType()
export class ResourceInput implements Partial<Resource> {
  name: string;
  url: string;
}
