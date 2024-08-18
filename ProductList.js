import React, { useState, useEffect } from 'react';
import { Grid, Container, Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { fetchProducts } from '../services/api';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetchProducts(category, { page });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        };

        loadProducts();
    }, [category, page]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
        </Container>
    );
};

export default ProductList;