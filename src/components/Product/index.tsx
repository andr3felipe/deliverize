import { ProductAlign, ProductContainer } from './styles'
import hamburger from '../../assets/hamburger.svg'
import { formatter } from '../../utils/formatter'
import { IngredientsMenu } from '../IngredientsMenu'
import { Ingredient } from '../../contexts/CyclesContext'

interface ProductProps {
  id: string
  title: string
  desc: string
  price: number
  discountPrice: number
  image: string
  ingredients: Ingredient[]
}

export function Product({
  id,
  title,
  desc,
  price,
  discountPrice,
  image,
  ingredients,
}: ProductProps) {
  return (
    <ProductContainer>
      <ProductAlign>
        <img src={hamburger} alt="" />
        {/* IMAGE LINK NOT WORKING >> https://teamsoft.com.br/test-frontend/picanha_cheddar_bacon.png */}
        <h1>{title}</h1>
        <h3>{desc}</h3>
        <div>
          <span>{formatter.format(discountPrice)}</span>
          <span>{formatter.format(price)}</span>
        </div>
      </ProductAlign>

      <div>
        <IngredientsMenu
          ingredients={ingredients}
          productDiscountPrice={discountPrice}
          productId={id}
        />
      </div>
    </ProductContainer>
  )
}
