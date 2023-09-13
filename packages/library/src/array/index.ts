import {
  indexItemType,
  indexItemsType,
  itemType,
  itemsType,
  getRangeArgsType,
  getSelectedItemArgsType,
  getSelectedItemTextArgsType,
  getItemsDefaultSelectedArgsType,
  getItemsRandomSelectedArgsType,
} from './types';

export function getCurrentIndex(indexItems: indexItemsType) {
  return (
    indexItems?.filter((indexItem: indexItemType) => indexItem.isCurrent)[0]
      ?.index ?? -1
  );
}

export function getIndexItems(items: itemsType) {
  return (
    items?.map((item: itemType, index: number) => ({
      ...item,
      index,
    })) ?? []
  );
}

export function getIndexItemsWithSelected(
  indexItems: indexItemsType,
  selectedItem: indexItemType
) {
  return (
    indexItems?.map((indexItem: indexItemType) => ({
      ...indexItem,
      isSelected: indexItem.index === selectedItem.index,
    })) ?? []
  );
}

export function getRandomItemFromArray<T>(array: Array<T>) {
  return array?.[Math.floor(Math.random() * array?.length)]; // eslint-disable-line no-unsafe-optional-chaining
}

export function getRange(getRangeArgs: getRangeArgsType) {
  const { range, indexSeed = 0, valueSeed = 0 } = getRangeArgs;

  return Array(range)
    .fill(undefined)
    .map((_, index) => valueSeed + index + indexSeed);
}

export function getSelectedItem({ items }: getSelectedItemArgsType) {
  return items?.find(({ isSelected }) => isSelected === true);
}

export function getSelectedItemText({ items }: getSelectedItemTextArgsType) {
  return items?.find(({ isSelected }) => isSelected === true)?.text;
}

export function getItemsDefaultSelected({
  defaultItems,
  items,
}: getItemsDefaultSelectedArgsType) {
  let result;

  if (defaultItems && items) {
    result = [
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...defaultItems?.map(({ id, name, ...rest }) => ({
        id,
        href: '#url',
        text: name,
        isSelected: name === defaultItems[0].name,
        ...rest,
      })),
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...items?.map(({ id, name, ...rest }) => ({
        id,
        href: '#url',
        text: name,
        isSelected: name === items[0].name,
        ...rest,
      })),
    ];
  }

  if (defaultItems && !items) {
    result = null;
  }

  if (!defaultItems && items) {
    result = items?.map(({ id, name, ...rest }) => ({
      id,
      href: '#url',
      text: name,
      isSelected: name === items[0].name,
      ...rest,
    }));
  }

  if (!defaultItems && !items) {
    result = null;
  }

  return result;
}

export function getItemsRandomSelected({
  items,
}: getItemsRandomSelectedArgsType) {
  const randomItem = getRandomItemFromArray(items?.map(({ name }) => name));

  return items.map(({ id, name, ...rest }) => ({
    id,
    href: '#url',
    text: name,
    isSelected: name === randomItem,
    ...rest,
  }));
}
