import CardExperience, { CardExperienceProps } from './CardExperience';
import { Grid, Box } from '@mui/material';

interface CardExperiencePropsList {
    data: CardExperienceProps[];
}

const CardExperienceList: React.FC<CardExperiencePropsList> = ({ data }) => {
    return (
        <Grid container spacing={2}>
            {
                data.map((item, index) => (
                    <Grid item key={index}>
                        <CardExperience {...item}/>
                    </Grid>
                ))}
        </Grid>
    );
};

export default CardExperienceList;