export const contactsState = [
  {
    firstName: 'Іван',
    lastName: 'Петренко',
    email: 'ivan.petrenko@example.com',
    phone: '+380671234567',
    id: '1',
  },
  {
    firstName: 'Олена',
    lastName: 'Ковальчук',
    email: 'olena.kovalchuk@example.com',
    phone: '+380501112233',
    id: '2',
  },
  {
    firstName: 'Микола',
    lastName: 'Шевченко',
    email: 'mykola.shevchenko@example.com',
    phone: '+380931234321',
    id: '3',
  },
];

  export const createNewContact = () => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      id: null,
    };
  };
