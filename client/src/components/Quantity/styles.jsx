import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Button: {
       root: "flex",
       textAlign: 'center'
      },
  }));
  
  export { useTheme };
  export default useStyles;
  