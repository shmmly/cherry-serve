import * as mongoose from 'mongoose'
import { DATABASE_CONNECTION } from '../common/constant'

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/cherry', { useNewUrlParser: true }),
  },
]
