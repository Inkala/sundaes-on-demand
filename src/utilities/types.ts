export interface Option {
  name: string;
  imagePath: string;
}

export interface Order {
  scoops: Option[];
  toppings?: Option[];
}

export interface OptionCounts {
  scoops: OrderOption;
  toppings: OrderOption;
}

export interface OrderOption {
  name?: string;
  amount?: number;
}

export interface OptionTotals {
  scoops: number;
  toppings: number;
}
