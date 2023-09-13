export type itemType = object;
export type itemsType = itemType[];

export type indexItemType = itemType & {
  id?: string;
  name?: string;
  text?: string;
  index?: number;
  isCurrent?: boolean;
  isSelected?: boolean;
};
export type indexItemsType = indexItemType[];

export type getRangeArgsType = {
  range: number;
  indexSeed?: number;
  valueSeed?: number;
};

export type getSelectedItemArgsType = {
  items: indexItemsType;
};

export type getSelectedItemTextArgsType = {
  items: indexItemsType;
};

export type getItemsDefaultSelectedArgsType = {
  defaultItems: indexItemsType;
  items: indexItemsType;
};

export type getItemsRandomSelectedArgsType = {
  items: indexItemsType;
};
