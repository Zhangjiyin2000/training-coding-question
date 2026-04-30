interface IUser {
    // complete this interface
  }
  
  interface IAddress {
    // complete this interface
  }
  
  interface ICompany {
    // complete this interface
  }
  
  type UserWithStringAddress = Omit<IUser, 'address'> & {
    address: string;
  };
  
  const getData = async (url: any): Promise<any> => {
    const response: Response = await fetch(url);
    const data: any = await response.json();
  
    const usersWithStringAddress: any = data.map(
      ({ address, company, ...rest }: any) => {
        delete address.geo;
        const stringAddress: any = Object.values(address).join(', ');
        const userWithStringAddress: UserWithStringAddress = {
          ...rest,
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
  