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

const FormatAddres = (address: Address): string => {
  return `${address.street}, ${address.number}, ${address.city}-${address.state}`;
};

export default FormatAddres;