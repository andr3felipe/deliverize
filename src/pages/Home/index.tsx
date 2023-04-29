import { HomeContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useContext } from 'react'
import { Product } from '../../components/Product'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Home() {
  const { products, setProducts, search } = useContext(CyclesContext)

  useEffect(() => {
    api.get('/products').then((res) => {
      const data = res.data
      setProducts(data)
    })
  }, [setProducts])

  const filterBySearchInput = products.filter((item) =>
    item.nm_product.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <HomeContainer>
      {search === ''
        ? products.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.nm_product}
                desc={item.description}
                price={item.vl_price}
                discountPrice={item.vl_discount}
                image={item.url_image}
                ingredients={item.ingredients}
              />
            )
          })
        : filterBySearchInput.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.nm_product}
                desc={item.description}
                price={item.vl_price}
                discountPrice={item.vl_discount}
                image={item.url_image}
                ingredients={item.ingredients}
              />
            )
          })}
    </HomeContainer>
  )
}
