
export const login = user => ({
  type: 'LOG_In',
  user
});

export const logout = () => ({
  type: 'LOG_OUT'
});