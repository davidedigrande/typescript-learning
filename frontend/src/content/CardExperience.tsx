import {
  Box,
  Grid,
  Typography,
  useTheme,
  Card
} from '@mui/material';


interface CardExperienceProps {
  title: string;
  institution: string;
  period: string;
  description: string;
}

const CardExperience: React.FC<CardExperienceProps> = ({
  title,
  institution,
  period,
  description 
}) => { 
  
  const theme = useTheme();

  return (
    <Card>
      <Grid container>
        <Grid item lg={3}>
          <Box p={3}>
            <Box>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h4" gutterBottom>{institution}</Typography>
              <Typography variant="h4" fontWeight="normal" color="text.secondary">{period}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={9}>
          <Box p={3}>
            <Grid container>{description}</Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardExperience
export type { CardExperienceProps }