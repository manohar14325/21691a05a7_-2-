import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt={product.productName}
            />
            <CardContent>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Typography variant="body2">Rating: {product.rating}</Typography>
                <Typography variant="body2">Discount: {product.discount}%</Typography>
                <Typography variant="body2">Availability: {product.availability}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;