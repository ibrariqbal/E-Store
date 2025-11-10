import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Autoplay } from 'swiper/modules'
import FetchItem from './FetchItem'
import ProductItem from './ProductItem'
import Rating from '@mui/material/Rating'
import { Button } from '@mui/material'
import { fetchProducts } from '../../redux/feature/productSlice.js'
import { addToCart } from '../../redux/feature/CartSlice.js'
import { toast } from 'react-toastify'

export default function ProductSlider({ item }) {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)

  // fetch products
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <p className="text-center text-gray-500 mt-5">Loading...</p>
  if (error) return <p className="text-center text-red-500 mt-5">{error}</p>

  return (
    <div className="ProductSlider py-5">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerView={item || 4}
        spaceBetween={18}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        className="mySwiper homeSlider"
      >
        {products.map((product, index) => {
          let discount = 0
          if (index === 0) discount = 20
          else if (index === 1) discount = 15
          else if (index === 2) discount = 10
          else if (index === 3) discount = 30
          else if (index === 4) discount = 40
          else if (index === 5) discount = 50
          else if (index === 6) discount = 10
          else if (index === 7) discount = 40
          else if (index === 8) discount = 70
          else if (index === 9) discount = 70
          else if (index === 10) discount = 50
          else if (index === 11) discount = 30
          else if (index === 12) discount = 25

          const discountedPrice = discount
            ? (product.price - (product.price * discount) / 100).toFixed(2)
            : null

          return (
            <SwiperSlide key={product.id}>
              <ProductItem
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <FetchItem img={product.image} index={index} discount={discount} />

                <div className="mt-3 px-3 pb-3">
                  <h4 className="line-clamp-1 mt-3 text-[15px] font-semibold text-gray-800 leading-tight">
                    {product.title}
                  </h4>

                  <Rating
                    className="mt-1"
                    name="product-rating"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />

                  {/* price with discount */}
                  {discount ? (
                    <p className="mt-2 text-[16px] font-bold text-gray-700">
                      <span className="line-through text-gray-400 mr-2 text-[14px]">
                        ${product.price}
                      </span>
                      <span className="text-red-500">${discountedPrice}</span>
                      <span className="ml-2 text-primary font-semibold">-{discount}%</span>
                    </p>
                  ) : (
                    <p className="mt-2 text-[16px] font-bold text-gray-700">
                      ${product.price}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="flex justify-between gap-2 mt-3">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      fullWidth
                      onClick={() => {
                        dispatch(addToCart(product))
                        toast.success(`${product.title} added to cart!`)
                      }}
                      sx={{
                        fontSize: '13px',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        borderRadius: '8px',
                      }}
                    >
                      Buy Now
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      fullWidth
                      onClick={() => {
                        dispatch(addToCart(product))
                        toast.success(`${product.title} added to cart!`)
                      }}
                      sx={{
                        fontSize: '13px',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        borderRadius: '8px',
                        borderWidth: '1.5px',
                        '&:hover': {
                          backgroundColor: '#ff5252',
                          color: 'white',
                          borderColor: '#ff5252',
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </ProductItem>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
