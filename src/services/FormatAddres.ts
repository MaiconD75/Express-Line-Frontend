interface Address {
  id: string;
  name?: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

export const FormatAddres = (address: Address): string => {
  return `Rua ${address.street}, ${address.number}, ${address.city}-${address.state}`;
};
