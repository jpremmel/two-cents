import currentUserReducer from '../../src/reducers/currentUserReducer';

describe('currentUserReducer', () => {

  let action;
  const sampleUser = {
    id: 1,
    firstName: 'Sylvie',
    lastName: 'Remmel',
    emailAddress: 'sylvie@adorable.com',
    password: 'chicken',
    linkedinUrl: '',
    otherUrl: '',
    bio: 'I\'m so fluffy and cute and I love to eat chicken.'
  };

  test('Should return default state if no action type is recognized', () => {
    expect(currentUserReducer({}, { type: null })).toEqual({});
  });

  test('Should set current user upon login', () => {
    const { id, firstName, lastName, emailAddress, password, linkedinUrl, otherUrl, bio } = sampleUser;
    action = {
      type: 'LOG_IN',
      user: sampleUser
    };
    expect(currentUserReducer({}, action)).toEqual({
      id: id,
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
      linkedinUrl: linkedinUrl,
      otherUrl: otherUrl,
      bio: bio
    });
  });

});