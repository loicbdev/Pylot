import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import styleProfilPage from './styleProfilPage';
import NoProfilPicYet from '../../common/Avatar/NoProfilPicYet';
import ImageAvatars from '../../common/Avatar/ImageAvatars';
import Footer from '../../common/Footer/Footer';
import Logout from '../FormConnection/Logout';
import { UserContext } from '../../../contexts/UserContextProvider';

const style = styleProfilPage;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function ProfilPage() {
  const { user } = useContext(UserContext);
  const [value, setValue] = React.useState(0);
  const [descriptionOpen, setDescriptionOpen] = React.useState(true);
  const [description, setDescription] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = style();

  const DescriptionisOpen = (e) => {
    e.preventDefault();
    if (descriptionOpen) {
      setDescriptionOpen(!descriptionOpen);
    }
  };

  return (
    <>
      <div className={classes.ProfilPage}>
        {user.profilPicture ? (
          <ImageAvatars sizeavatar="large" user={user} />
        ) : (
          <NoProfilPicYet />
        )}
      </div>
      <AppBar className={classes.ProfilPage} position="static">
        <Tabs
          className={classes.title}
          value={value}
          onChange={handleChange}
          aria-label="Onglet"
        >
          <Tab label="Profil" {...a11yProps(0)} />
          <Tab label="Paramètres" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.shutter} value={value} index={0}>
        <section>
          <h3>A propos</h3>
          <div className={classes.heading}>
            <div onClick={DescriptionisOpen}>
              <p>💬 Ma super bio</p>
              <div
                disabled={descriptionOpen}
                value={description}
                className={classes.bioInput}
                onChange={(e) => setDescription(e.target.value)}
                contentEditable
              />
            </div>
          </div>
        </section>
        <section>
          <h3>Avis</h3>
          <div className={classes.heading}>
            <div className={classes.headingSelected}>Avis reçus</div>
            <div className={classes.headingSelected}>Avis laissés</div>
          </div>
        </section>
        <section>
          <h3>Trajets</h3>
          <div className={classes.heading}>
            <Link to="/trajets">
              <div className={classes.headingSelected}>Trajets prévus</div>
            </Link>
            <div className={classes.headingSelected}>Trajets archivés</div>
          </div>
        </section>
        <div className={classes.logout}>
          <Logout />
        </div>

        <div className={classes.positionning} />
      </TabPanel>
      <TabPanel className={classes.shutter} value={value} index={1}>
        <section>
          <h3>Vérifications</h3>
          <div className={classes.heading}>
            <div className={classes.headingSelected}>
              Vérifier ma carte d&apos;identité
            </div>
            <div className={classes.headingSelected}>
              Vérifier mon numéro de téléphone
            </div>
          </div>
        </section>
        <section>
          <h3>Réglages</h3>
          <div className={classes.heading}>
            <Link to="profil-preferences">
              <div className={classes.headingSelected}>Préférences</div>
            </Link>
            <div className={classes.headingSelected}>Angel</div>
          </div>
        </section>
        <section>
          <h3>Paramètres</h3>
          <div className={classes.heading}>
            <div className={classes.headingSelected}>Email</div>
            <div className={classes.headingSelected}>Mot de passe</div>
            <Link to="/cgu">
              <div className={classes.headingSelected}>
                Conditions générales
              </div>
            </Link>
            <div className={classes.headingSelected}>
              Protection des données
            </div>
          </div>
        </section>
        <div className={classes.positionning} />
      </TabPanel>

      <Footer />
    </>
  );
}

export default ProfilPage;
