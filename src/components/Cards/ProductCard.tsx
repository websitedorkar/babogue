import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface ProductCardProps {
  product: {
    id: number;
    banner?: any;
    name: string;
    description: string;
    className?: string;
    price_from: number;
    url: string;
    badge?: string;
    purchased?: boolean;
    fadedImage?: boolean;
  };
}


const ProductBadge: React.FC<{heading: string;}> = ({ heading }) => (
    <div className='absolute -top-[1.25rem] md:-top-[20px] flex start-0 w-full'>
      <span className={`text-xs mx-auto relative bg-primary inline-flex items-center rounded-b-xl px-5 xl:min-w-[135px] justify-center py-2 leading-4 min-h-[36px] text-white before:content-[''] before:z-[-1] before:absolute before:top-0 before:w-0 before:h-0 before:border-l-[11px] before:border-l-[#947761] before:border-opacity-50 before:-end-[11px] before:border-t-[20px] before:border-y-transparent before:border-solid after:content-[''] after:z-[-1] after:absolute after:top-0 after:w-0 after:h-0 after:border-r-[11px] after:border-r-[#947761] after:border-opacity-50 after:-start-[11px] after:border-t-[20px] after:border-y-transparent after:border-solid`}>{heading}</span>
    </div>
  );
  

const ProductMedia: React.FC<{ thumbnail: any, heading: string, fadedImage?: boolean}> = ({ thumbnail, heading, fadedImage }) => (
    <div className='min-w-[100px] lg:min-w-[120px] py-5 md:py-0'>
    {thumbnail && <div className={`w-[80px] min-w-[80px] h-[80px] lg:w-[115px] lg:h-[115px] lg:min-w-[115px] border-[#C1DED5] mb-2 md:mb-3 rounded-full flex items-center justify-center p-[3px] md:p-[6px] mx-auto border-dashed border-2 ${ fadedImage && fadedImage ? 'grayscale opacity-50' : ''}`}>
        <Image src={thumbnail} className='inline-block' alt={heading} />
    </div>}
    {heading && <h2 className='text-xxs lg:text-sm leading-[1] font-bold text-dark md:mb-3'>{heading}</h2>}
</div>
  );
  

const ProductInfo: React.FC<{ description: string, badge?: string}> = ({ description, badge }) => (
    <div className='ps-3 lg:p-0 md:border-l-0 relative py-3 pt-6 md:py-0'>
    {badge && <div className='md:hidden'><ProductBadge heading={badge} /></div>}
    {description && <div className='text-[12px] leading-[1.2] md:text-xs font-normal text-dark'>{description}</div>}
</div>
  );

const ProductAction: React.FC<{ price: number; button_label: string, button_url: string, purchased?: boolean }> = ({ price, button_label, button_url, purchased}) => (
    <div className='ps-3 md:p-0 md:border-l-0 mb-3 md:mb-0'>
      { purchased && purchased ? 
      <div className="flex items-center justify-between gap-1">
        <Link href={'#'} className='flex-grow text-white'>
          <Button className='w-full px-3' variant={'default'} size={'xs'}>ACCESS THE COURSE</Button>
        </Link>
      </div>
     :
     <div className="flex items-center justify-between gap-1">
     {price && <span className='border border-border px-3 font-roboto flex-grow py-2 inline-flex items-center justify-center rounded-full text-xxs font-normal text-black uppercase tracking-tight'>FROM €{price}</span>}
     {button_label && <Link href={button_url} className='flex-grow text-white'><Button className='w-full px-3' variant={'default'} size={'xs'}>{button_label}</Button></Link>}
 </div>
    }
  </div>
  );
  
  
//   md:border-b md:border-border md:pb-3 mb-2
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex gap-2 md:flex-col border border-solid border-border rounded-[16px] px-2 lg:px-3 md:py-3 md:pt-6 relative z-[1] bg-white">
         {product.badge && <div className='hidden md:block'><ProductBadge heading={product.badge} /></div>}
        {product.banner && <ProductMedia fadedImage={product.fadedImage} heading={product.name} thumbnail={product.banner} />}
        
         {/* Mobile View */}
         <div  className='block md:hidden relative before:content-[""] before:w-[1px] before:h-[calc(100%-2rem)] before:bg-border before:absolute before:start-0 before:top-1/2 before:-translate-y-1/2 md:before:content-[unset]'>
            {product.description && <div className='mb-2'>
                <ProductInfo badge={product.badge} description={product.description}/>
                </div>
            }
            {product.price_from && <div className='mt-auto md:border-t md:border-border md:pt-2'>
                <ProductAction purchased={product.purchased} price={product.price_from}  button_label={'Buy Now'}  button_url={'#'} />
                </div>}
         </div>

         {/* Desktop View */}
         <>
            {/* {product.banner && <ProductMedia heading={product.name} thumbnail={product.banner} />} */}
            {product.description && <div className='hidden md:block mb-2'>
                <ProductInfo badge={product.badge} description={product.description}/>
                </div>
            }
            {product.price_from && <div className='mt-auto hidden md:block md:border-t md:border-border md:pt-3'>
                <ProductAction purchased={product.purchased} price={product.price_from}  button_label={'Buy Now'}  button_url={'#'} />
                </div>}
         </>
    </div>
  );
};

export default ProductCard;
