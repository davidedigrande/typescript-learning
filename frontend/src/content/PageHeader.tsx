import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PageHeader() {
  const user = {
    name: 'Davide Di Grande',
    avatar: 'https://media.licdn.com/dms/image/D4E03AQGhPpTmm863bg/profile-displayphoto-shrink_800_800/0/1695711704197?e=1706745600&v=beta&t=p7dsWKm4dbKwMXpcXABftIFVppWM_aSf2m8vCbtIJJY'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="subtitle2">
          Software Engineer
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
