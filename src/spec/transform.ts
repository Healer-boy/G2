import { TransformComponent } from '../runtime';

export type Transform = SortByTransform | FetchTransform | CustomTransform;

export type TransformTypes = 'sortBy' | 'fetch' | TransformComponent;

export type SortByTransform = {
  type?: 'sortBy';
  fields?: string[];
  order?: 'DESC' | 'ASC';
};

export type FetchTransform = {
  type?: 'fetch';
  url?: string;
  format?: 'json';
};

export type SankeyTransform = {
  type?: 'sankey';
  nodeId?(node: any): any;
  // sankey.nodeSort(undefined) is the default and resorts by ascending breadth during each iteration.
  // sankey.nodeSort(null) specifies the input order of nodes and never sorts.
  // sankey.nodeSort(function) specifies the given order as a comparator function and sorts once on initialization.
  nodeSort?: null | undefined | ((a: any, b: any) => number);
  nodeAlign?:
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | ((node: any, n: number) => number);
  nodeWidth?: number;
  nodePadding?: number;
  // support config the depth of node
  nodeDepth?: (datum: any, maxDepth: number) => number;
};

export type CustomTransform = {
  type?: TransformComponent;
  [key: string]: any;
};
