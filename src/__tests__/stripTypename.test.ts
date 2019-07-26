import stripTypename from '../';

describe('stripTypename', () => {
  describe('Given an Apollo GraphQL object with __typename', () => {
    let obj: any;

    beforeEach(() => {
      obj = {
        arrayItems: [
          {
            id: 1,
            colour: 'Red',
            nestedObj: {
              address: {
                line1: '742 Evergreen Terrace',
                city: 'Springfield',
                state: null,
                __typename: 'Address',
              },
              __typename: 'NestedObj',
            },
            __typename: 'ArrayItem',
          },
          {
            id: 2,
            colour: 'Yellow',
            nestedObj: {
              address: {
                line1: '31 Spooner Street',
                city: 'Quahog',
                state: 'Rhode Island',
                __typename: 'Address',
              },
              __typename: 'NestedObj',
            },
            __typename: 'ArrayItem',
          },
        ],
        obj: {
          integer: 1,
          primitive: true,
          nestedArrayItems: [
            {
              name: 'Nestle Toll House',
              __typename: 'NestedArrayItem',
            },
            {
              name: 'Conde Nest',
              __typename: 'NestedArrayItem',
            },
          ],
          __typename: 'Object',
        },
      };
    });

    describe('When the __typename is stripped', () => {
      let strippedObj: any;

      beforeEach(() => {
        strippedObj = stripTypename(obj);
      });

      it('should not have any __typename properties', () => {
        expect(strippedObj).toMatchSnapshot();
      });
    });
  });
});
