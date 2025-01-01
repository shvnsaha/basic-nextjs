import React from 'react';

 const DynamicProductPage = async({params,searchParams}) => {
    const { productId } = await params;
    const {category} = await searchParams
    console.log(productId);
    return (
        <div>
            Product Id :{productId}
            category: {category}
        </div>
    );
};

export default DynamicProductPage;