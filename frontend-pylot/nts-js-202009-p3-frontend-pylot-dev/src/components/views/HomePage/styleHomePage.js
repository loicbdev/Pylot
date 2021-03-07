const styleHomePage = {
  HomePage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '150px',
    '& a': {
      textDecoration: 'none',
    },
  },
  LogoPylot: {
    display: 'flex',
    alignItems: 'center',
    height: '65vh',
  },
};

export default styleHomePage;
