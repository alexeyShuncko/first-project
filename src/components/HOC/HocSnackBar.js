import React from 'react';

const HocSnackBar = (
  Component,
  openSnackBar,
  setOpenSnackBar,
  error,
  setErrorSnackBar,
  errorText,
  setErrorSnackBarText
) => {
  return (
    <Component
      openSnackBar={openSnackBar}
      setOpenSnackBar={setOpenSnackBar}
      error={error}
      setErrorSnackBar={setErrorSnackBar}
      errorText={errorText}
      setErrorSnackBarText={setErrorSnackBarText}
    />
  );
};
export default HocSnackBar;
