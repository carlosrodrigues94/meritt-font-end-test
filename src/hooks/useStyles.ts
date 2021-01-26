import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      flexGrow: 1,
    },

    /**
     * Component - Header
     */
    headerComponent: {
      background: '#FA558F',
      position: 'sticky',
      top: '0',
    },
    title: {
      fontSize: '20px',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      margin: '0 0 0 14px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
        margin: '0 0 0 8px',
      },
    },
    headerBurguerButton: {
      height: 'auto',
      width: 'auto',
    },
    headerBurgerIcon: {
      fontSize: '30px',
    },

    /**
     * Page - Home
     */
    homeContainer: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      background: '#E5E5E5',
      padding: '34px',
    },

    /**
     * Page Home/components
     */

    containerHorizontalCards: {
      display: 'flex',
      flexDirection: 'column',
      width: '70%',
    },

    cardHorizontal: {
      display: 'flex',
      overflowX: 'auto',
      width: '100%',
      maxWidth: '844px',
      height: '263px',
      background: '#ffff',
      padding: '24px',

      '&:nth-child(1)': {
        marginBottom: '20px',
      },
    },
    cardVertical: {
      width: '268px',
      height: '546px',
      background: '#ffff',
      padding: '24px',
      marginLeft: '20px',
    },

    /**
     * Card Informations
     */
    cardInformations: {
      width: '222px',
      height: '150px',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)',
      padding: '7px 11px 15px 11px ',
      margin: '0 10px',
      borderRadius: '2px',
    },
    cardInformationsTitle: {
      fontSize: '16px',
      color: '#000',
      marginTop: '11px',
      fontWeight: 700,
    },
    cardInformationsBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      width: '106.63px',
      height: '16px',
      borderRadius: '2px',
    },
    cardInformationBadgeText: {
      fontSize: '10px',
      margin: '0',
    },
    cardInformationsProgressBar: {
      display: 'flex',
      width: '202px',
      height: '3px',
      margin: '32px 0 8px 0',
      background: '#C4C4C4',
      borderRadius: '2px',
      position: 'relative',
    },
    cardInformationsProgressBarFilled: {
      height: '100%',
      background: '#FA558F',
      borderRadius: '2px',
      position: 'absolute',
    },

    /**
     * Card Informations "Clock with time and Questions quantity"
     */
    cardInformationsContainerDetailsTimeQuestions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      color: '#757575',
      fontSize: '12px',
      margin: '8px 0 0 0',
      height: '15px',
      fontWeight: 400,

      p: {
        margin: '0',
        color: '#757575',
      },
    },
    cardInformationsDetailsFromTo: {
      fontWeight: 300,
      fontSize: '10px',
      margin: '12px 0',
      color: '#757575',
    },
    cardInformationsDetailsTimeQuestionsIcon: {
      fontSize: '14px',
      margin: '4px 4px 0 0',
    },
  }),
);
export { useStyles };
