import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5,
    width: 800,
    // height: 500,
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  box: {
    order: 1,
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'center',
  },
}));

export default useStyles;