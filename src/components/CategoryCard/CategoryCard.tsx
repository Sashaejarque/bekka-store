import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
    categoryName: string;
}
const CategoryCard: FC<Props> = ({
    categoryName,
}) => {
    const textFormatted =  `${categoryName[0].toUpperCase()}${categoryName.slice(1)}`;
    const handleRoute = (categoryName: String) => {
        if (categoryName === "men's clothing") {
            return '/categories/men-clothing';
        }
        if (categoryName === "women's clothing") {
            return '/categories/women-clothing';
        }
        return `/categories/${categoryName}`;
    };

    return(
        <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="data:image/png;base64,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"
                alt="green iguana"
            />
            <CardContent>
                <Typography textAlign="center">
                    {textFormatted}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="center">
                    <Button size="small">
                        <Link href={handleRoute(categoryName)}>See more</Link>
                    </Button>
                </Grid>
            </CardActions>
    </Card>
    )
};

export default CategoryCard;