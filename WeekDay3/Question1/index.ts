// Complete the following requirements:

// 1. Finish the implementation of the provided interfaces according to the response data from https://jsonplaceholder.typicode.com/users 
// IUser
// IAddress
// ICompany
// 2. Replace all any type with proper types/interfaces in the getData() function

interface IUser {
    // complete this interface
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
  }
  
  interface IAddress {
    // complete this interface
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: string;
  }
  
  interface ICompany {
    // complete this interface
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  type UserWithStringAddress = Omit<IUser, 'address'> & {
    address: string;
  };
  
  const getData = async (url: string): Promise<any> => {
    const response: Response = await fetch(url);
    const data: IUser[] = await response.json();
  
    const usersWithStringAddress: UserWithStringAddress[] = data.map(
      ({ address, company, ...rest }: IUser) => {
        delete address.geo;
        const stringAddress: string = Object.values(address).join(', ');
        const userWithStringAddress: UserWithStringAddress = {
          ...rest,
          company: company,
          address: stringAddress,
        };
        return userWithStringAddress;
      }
    );
    return usersWithStringAddress;
  };
  
  getData('https://jsonplaceholder.typicode.com/users')
    .then(console.log)
    .catch(console.error);
  