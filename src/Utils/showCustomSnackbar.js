import { showMessage } from 'react-native-flash-message';
import CustomSnackbarView from './CustomSnackbarView'; // update path if needed

const showCustomSnackbar = (message, type = 0) => {
  showMessage({
    message,
    type: 'default',
    backgroundColor: 'transparent',
    duration: 3000,
    renderCustomContent: () => (
      <CustomSnackbarView message={message} type={type} />
    ),
  });
};

export default showCustomSnackbar;
