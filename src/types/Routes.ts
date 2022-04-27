export type Route = {
  key: string;
  name: string;
  path: string;
  exact: boolean;
  component: JSX.Element | any;
  isPrivate?: boolean;
};

export type Routes = Route[];
