'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

import { Product } from '@/types';
import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import Link from 'next/link';

const CartItem = ({
	data,
	appearDelay = 0,
}: {
	data: Product;
	appearDelay: number;
}) => {
	const cart = useCart();
	const onRemove = () => {
		cart.removeItem(data.id);
	};

	return (
		<div
			className='flex py-6 border-b animate-card opacity-0'
			style={{ animationDelay: `${appearDelay * 0.1}s` }}
		>
			<div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
				<Image
					src={data.images[0].url}
					alt={data.name}
					fill
					className='object-cover object-center'
				/>
			</div>
			<div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
				<div className='absolute z-10 right-0 top-0'>
					<IconButton onClick={onRemove} icon={<X size={15} />} />
				</div>
				<div
					className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0
					mr-3'
				>
					<div className='flex justify-between'>
						<h2 className='text-lg font-semibold text-black'>
							<Link href={`/product/${data.id}`}>{data.name}</Link>
						</h2>
					</div>
					<div className='my-3 flex text-sm'>
						<p className='text-gray-500'>{data.color.name}</p>
						<p className='text-gray-500 ml-4 border-l border-gray-200 pl-4'>
							{data.size.name}
						</p>
					</div>
					<Currency value={data.price} />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
