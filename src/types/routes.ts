import { User } from './response';

export type RootStackParamList = {
  Home: undefined;
  Repositories: {
    user: User;
  };
};
