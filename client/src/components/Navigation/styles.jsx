import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    userSelect: 'none',
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export { useTheme };
export default useStyles;
