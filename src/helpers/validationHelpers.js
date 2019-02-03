export const Required = value => (value ? undefined : "This field is required");

export const Email = email => {
    if (!email) {
        return 'undefined';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email address';
      }
};
