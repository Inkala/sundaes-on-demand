import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';
import { OptionCounts, OptionTotals } from '../utilities/types';
import { Option } from '../utilities/types';

interface ProviderProps {
  scoops?: Option[];
  toppings?: Option[];
  children: React.ReactNode;
}

interface OrderDetailsContext {
  optionCounts: OptionCounts;
  totals: OptionTotals;
  resetOrder?: () => void;
  updateItemCount?: (
    itemName: string,
    newItemCount: number,
    optionType: string
  ) => void;
}

const initialContext: OrderDetailsContext = {
  optionCounts: {
    scoops: {},
    toppings: {},
  },
  totals: {
    scoops: 0,
    toppings: 0,
  },
};

const OrderDetails = createContext(initialContext); //

export const useOrderDetails = () => {
  const contextValue = useContext(OrderDetails);
  if (!contextValue) {
    throw new Error(
      'useOrderDetails must be called from within an OrderDetailsProvider'
    );
  }

  return contextValue;
};

export const OrderDetailsProvider = (props: ProviderProps) => {
  const [optionCounts, setOptionCounts] = useState<OptionCounts>({
    scoops: {},
    toppings: {},
  });

  const updateItemCount = (
    itemName: string,
    newItemCount: number,
    optionType: string
  ) => {
    const newOptionCounts = { ...optionCounts };

    // const newOption = newOptionCounts[optionType as keyof OptionCounts];
    // const newOptionValue = newOption[itemName as keyof OrderOption];

    newOptionCounts[optionType as keyof OptionCounts][
      itemName as keyof OrderOption
    ] = newItemCount;

    setOptionCounts(newOptionCounts);
  };

  const resetOrder = () => {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  };

  const calculateTotal = (optionType: string) => {
    const countsArray = Object.values(
      optionCounts[optionType as keyof OptionCounts]
    );
    const totalPrice = countsArray.reduce((total, value) => total + value, 0);
    return totalPrice * pricePerItem[optionType as keyof OptionTotals];
  };

  const totals: OptionTotals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };

  const value: OrderDetailsContext = {
    optionCounts,
    totals,
    resetOrder,
    updateItemCount,
  };

  return <OrderDetails.Provider value={value} {...props} />;
};
