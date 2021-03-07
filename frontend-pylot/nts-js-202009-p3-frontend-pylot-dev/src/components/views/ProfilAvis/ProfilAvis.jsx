import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Star from '../../../images/Star';
import StarsBar from '../../common/StarsBar/StarsBar';
import styleProfilAvis from './styleProfilAvis';

const style = makeStyles(styleProfilAvis);

function ProfilAvis() {
  const [perfect] = React.useState(5);
  const [veryGood] = React.useState(0);
  const [good] = React.useState(0);
  const [disapointed] = React.useState(0);
  const [dodge] = React.useState(0);
  const [averageNote] = React.useState(5);
  const [countAvis] = React.useState(5);
  const classes = style();

  return (
    <div className={classes.avis}>
      <h1>Avis</h1>
      <div className={classes.average}>
        <Star />
        {`${averageNote}  /5 - ${countAvis} avis`}
      </div>

      <section className={classes.notePoint}>
        <Box
          className={classes.StarsBox}
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          <Typography component="legend">Parfait</Typography>
          <StarsBar name="Parfait" value={5} format="readOnly" />
        </Box>
        <div className={classes.numberPoint}>
          <p className={classes.text}>{perfect}</p>
        </div>
      </section>

      <section className={classes.notePoint}>
        <Box
          className={classes.StarsBox}
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          <Typography component="legend">Très bien</Typography>
          <StarsBar name="Très bien" value={4} format="readOnly" />
        </Box>
        <div className={classes.numberPoint}>
          <p className={classes.text}>{veryGood}</p>
        </div>
      </section>

      <section className={classes.notePoint}>
        <Box
          className={classes.StarsBox}
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          <Typography component="legend">Bien</Typography>
          <StarsBar name="Bien" value={3} format="readOnly" />
        </Box>
        <div className={classes.numberPoint}>
          <p className={classes.text}>{good}</p>
        </div>
      </section>
      <section className={classes.notePoint}>
        <Box
          className={classes.StarsBox}
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          <Typography component="legend">Décevant</Typography>
          <StarsBar name="Décevant" value={2} format="readOnly" />
        </Box>
        <div className={classes.numberPoint}>
          <p className={classes.text}>{disapointed}</p>
        </div>
      </section>
      <section className={classes.notePoint}>
        <Box
          className={classes.StarsBox}
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          <Typography component="legend">A éviter</Typography>
          <StarsBar name="A éviter" value={1} format="readOnly" />
        </Box>
        <div className={classes.numberPoint}>
          <p className={classes.text}>{dodge}</p>
        </div>
      </section>
    </div>
  );
}

export default ProfilAvis;
