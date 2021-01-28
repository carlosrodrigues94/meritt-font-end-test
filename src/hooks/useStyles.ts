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
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      background: '#E5E5E5',
      padding: '34px',
      position: 'relative',
      [theme.breakpoints.down(1060)]: {
        padding: '15px 19px',
      },
    },

    homeTitleUserName: {
      margin: '0',
      fontWeight: 400,
      fontSize: '24px',
      color: '#595959',
      marginBottom: '20px',
      [theme.breakpoints.down(1016)]: {
        fontSize: '18px',
      },
    },

    /**
     * Page Home/components
     */

    contentContainerCards: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      [theme.breakpoints.down(1016)]: {
        flexDirection: 'column',
      },
    },

    containerHorizontalCards: {
      display: 'block',
      alignItems: 'center',
      flexDirection: 'column',
      height: 'auto',
      width: '70%',
      maxWidth: '844px',
      padding: '0',
      scrollBehavior: 'smooth',
      [theme.breakpoints.down(1016)]: {
        width: '100%',
        marginBottom: '20px',
        maxWidth: '100%',
      },
    },

    cardHorizontal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '263px',
      background: '#ffff',
      padding: '24px',
      margin: '0',
      position: 'relative',
      '&:nth-child(1)': {
        marginBottom: '20px',
      },
      [theme.breakpoints.down('xs')]: {
        overflow: 'auto',
      },

      [theme.breakpoints.down(1016)]: {
        background: 'none',
        minHeight: '200px',
        padding: '0',
      },
    },
    cardHorizontalTitle: {
      fontWeight: 700,
      fontSize: '14px',
      color: '#595959',
      position: 'absolute',
      left: '24px',
      top: '24px',
      [theme.breakpoints.down(1016)]: {
        left: '0',
      },
    },

    cardVertical: {
      display: 'flex',
      flexDirection: 'column',
      width: '268px',
      height: '546px',
      background: '#ffff',
      marginLeft: '20px',
      overflow: 'visible',

      [theme.breakpoints.down(660)]: {
        width: '100%',
        height: 'auto',
        background: 'none',
        margin: 0,
        maxWidth: '100%',
      },
    },

    divResultsSeeAllLink: {
      width: '100%',
      top: '0',
      background: '#fff',
      position: 'sticky',
      padding: '20px 24px 12px 24px',
      margin: '0',
      color: '#595959',

      [theme.breakpoints.down(660)]: {
        padding: '4px',
        background: 'none',
      },
    },

    buttonArrowRight: {
      display: 'none',
      top: 'auto',
      color: '#E8E8E8',
      margin: '0 0 0 4px',
      [theme.breakpoints.down(1270)]: {
        display: 'flex',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
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
      cursor: 'pointer',

      [theme.breakpoints.down(1016)]: {
        background: '#fff',
      },
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
      minWidth: '106.63px',
      maxWidth: '118.63px',
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

    cardInformationsDetailsProgressContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      color: '#757575',
      fontSize: '12px',
      margin: '8px 0 0 0',
      background: 'blue',
      height: '15px',
      fontWeight: 400,

      p: {
        margin: '0',
        color: '#757575',
      },
    },

    /**
     * Card Informations Result with Questions Progress
     */

    cardInformationsResultContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      color: '#757575',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)',
      fontSize: '12px',
      margin: '8px 0 0 0',
      padding: '8px',
      fontWeight: 400,
      overflow: 'visible',
      p: {
        margin: '0',
        color: '#757575',
      },
      [theme.breakpoints.down(660)]: {
        height: '135px',
        margin: '8px 10px',
        background: '#ffff',
        overflow: 'visible',
        marginLeft: 'auto',
        width: '215px',

        '&:nth-child(1)': {
          // marginLeft: '280px',
        },
      },
    },

    cardInformationsResultTitle: {
      textAlign: 'start',
      fontSize: '16px',
      color: '#000',
      marginTop: '6px',
      marginRight: 'auto',
      fontWeight: 700,
    },

    cardInformationsResultDetailsProgress: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      color: '#757575',
      fontSize: '12px',
      fontWeight: 400,

      p: {
        margin: '0',
        color: '#757575',
      },
    },

    /**
     * Page Exam
     */

    examContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      background: '#E5E5E5',
      width: '100%',
      padding: '25px 34px',

      [theme.breakpoints.down(700)]: {
        padding: '19px',
      },
    },

    /**
     * Page Exam Components / SubHeader
     */
    subHeaderComponent: {
      display: 'flex',
      height: '76px',
      width: '100%',
      padding: '0 35px',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#ffff',
      color: '#757575',
      position: 'fixed',
      top: '64px',
      zIndex: 2,

      [theme.breakpoints.down('sm')]: {
        top: '60px',
        height: '60px',
        padding: '0 15px',
      },

      [theme.breakpoints.down(540)]: {
        top: '50px',
      },
    },

    containerLineProgress: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '5px',
      position: 'fixed',
      top: '140px',
      padding: 0,
      zIndex: 2,

      [theme.breakpoints.down('sm')]: {
        top: '115px',
      },
      [theme.breakpoints.down(540)]: {
        top: '109px',
      },
    },
    contentLineProgress: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
      background: '#757575',
    },
    lineProgress: {
      display: 'flex',
      height: '100%',
      background: '#FA558F',
      transition: 'all 1s',
    },

    examTitleName: {
      fontSize: '20px',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    examTitleInitials: {
      display: 'none',
      fontWeight: 'bold',

      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },

    contentButtonAndTimeIsVisible: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      transition: 'all 0.3s',
    },

    contentTimeVisible: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '22px',
      width: '60px',
      margin: '0 0 0 5px',
      transition: 'background 0.1s',
      [theme.breakpoints.down('sm')]: {
        width: '40px',
      },
    },

    buttonSubHeaderTimeIsVisible: {
      color: '#FA558F',
      width: '30px',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        minWidth: '15px',
        width: '20px',
        padding: '8px 16px',
      },
    },

    visibilityAndQuestionsIcon: {
      fontSize: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },

    textButtonsQuestionsAndTimeVisible: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
    buttonSubHeaderSendExam: {
      width: 'auto',
      border: '1px solid #FA558F',
      color: '#FA558F',
      fontSize: '14px',
      textTransform: 'none',
      padding: '8px 12px 8px 30px',

      [theme.breakpoints.down('sm')]: {
        border: '0',
        minWidth: '0',
        padding: '8px 16px',
        b: {
          display: 'none',
        },
      },
    },

    buttonSendExamText: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    buttonSubHeaderSendExamIcon: {
      margin: '0 0 0 11px',
      fontSize: '22px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        margin: '0',
      },
    },

    /**
     * Container Questions
     *
     */

    buttonThreeDotsAnswer: {
      mibWidth: 0,
      minHeight: 0,
      color: '#FA558F',
      margin: '0 0 0 auto',
    },

    menuButtonThreeDots: {
      margin: '0 0 0 70px',
      [theme.breakpoints.down('md')]: {
        margin: '0 40px 50px 0',
      },
    },
    blackMenuBackgroundScreen: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',

        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(89, 89, 89, 0.22)',
        zIndex: 2,
      },
    },

    containerButtonsNavigation: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      padding: 0,
      margin: '30px 0',
    },

    buttonNavigatePageBack: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      minWidth: '112px',
      height: '32px',
      background: 'none',
      fontSize: '14px',
      color: '#FA558F',
      border: '1px solid #FA558F',
      padding: '8px 30px 8px 10px',
      margin: '0 10px 0 0',

      b: {
        display: 'flex',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '11px 4px',
      },
    },
    buttonNavigatePageNext: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      minWidth: '112px',
      height: '32px',
      background: '#FA558F',
      fontSize: '14px',
      border: '1px solid #FA558F',
      color: '#FFF',
      padding: '8px 10px 8px 30px',
      margin: '0 0 0 10px',

      '&:hover': {
        color: '#FA558F',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '11px 4px',
      },
    },

    buttonNavigateText: {
      fontWeight: 400,
      fontSize: '14px',
      textTransform: 'none',
    },
    buttonNavigateIcon: {
      fontSize: '16px',
    },

    containerBookmark: {
      display: 'flex',

      width: '100%',
      justifyContent: 'space-between',
    },
    questionNumber: {},

    buttonBookmark: {},

    bookmarkIconQuestion: {},
  }),
);
export { useStyles };
