import { useSelector } from 'react-redux'
import { getListQuantityProductPername } from '../../app/selectors'

export const Cart = () => {
  const list = useSelector(getListQuantityProductPername)
  console.log(list)
  return (
    <div className="Selection">
      <h1>Vos produits sélectionnés</h1>
      {list
        ?.filter((product) => product.quantity !== 0)
        .map((item, index) => (
          <span key={index} className="SelectedProduct">
            {item.quantity} x {item.title}{' '}
          </span>
        ))}
    </div>
  )
}
