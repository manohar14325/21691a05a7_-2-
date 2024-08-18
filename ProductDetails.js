import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { fetchProductDetails } from '../services/api';

const ProductDetails = () => {
    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProductDetails = async () => {
            const response = await fetchProductDetails(category, productId);
            setProduct(response.data);
        };

        loadProductDetails();
    }, [category, productId]);

    if (!product) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4">{product.productName}</Typography>
            <img src="https://via.placeholder.com/300" alt={product.productName} />
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Typography variant="body1">Rating: {product.rating}</Typography>
            <Typography variant="body1">Discount: {product.discount}%</Typography>
            <Typography variant="body1">Availability: {product.availability}</Typography>
        </Container>
    );
};

export default ProductDetails;