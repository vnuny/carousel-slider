"use client";
import Link from 'next/link';
import styles from './styles.module.scss'
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface ProductCardProps {
    productTitle: string;
    productPrice: string;
    productImg: string;
    productLink: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
    productTitle,
    productPrice,
    productImg,
    productLink
}) => {
    const router = useRouter();
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(false);
    };

    const handleMouseMove = () => {
        setIsDragging(true);
    };

    const handleClick = (e: any) => {
        if (!isDragging) {
            router.push(productLink);
        }
    };
    return (
            <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className={styles.productCard}>
                <img src={productImg} alt="product" />
                <div className={styles.productInfo}>
                    <h3>{productTitle}</h3>
                    <p>SAR {productPrice}</p>
                </div>
            </div>
    )
}

const ProductSkeleton = () => {
    return (
        <div className={styles.productSkeleton}>
            <div className={styles.productImg}>

            </div>
            {/* <Image placeholder="blur" src={loadingImg} alt="product" /> */}
            <div className={styles.productInfo}>
                <h3></h3>
                <p></p>
            </div>
        </div>
    )
}

export { ProductCard, ProductSkeleton };