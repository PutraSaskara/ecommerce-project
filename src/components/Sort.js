import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import './sort.css'

const Sort = () => {
  
  /***use the context***/

  const { filtered_products : products, setGridView, setListView, updateSort, sort, grid_view } = useFilterContext()

  return (
    <div className='section-sort'>
      <div className='btn-container'>
        {/** add button gridview and listview, 
         *   use the imported icon above 
         */}

        <button onClick={setGridView} className={grid_view ? 'active' : ''}>
          <BsFillGridFill/>
         </button>

         <button onClick={setListView} className={grid_view ? '' : 'active'}>
          <BsList/>
         </button>
      </div>
      <p>
        {/** add info number of products found */}
        {products.length} Product Found
      </p>
      <hr />
      <form>
        
        {/** add the label and dropdown select
         *   use this value :
         *   - price-lowest
         *   - price-highest
         *   - name-a
         *   - name-z
         */}

<select name='form' id='form' onChange={updateSort} value={sort} >
  <option value="price-lowest">Price (Lowest)</option>
  <option value="price-highest">Price (Highest)</option>
  <option value="name-a">Name (A-Z)</option>
  <option value="name-z">Name (Z-A)</option>
</select>

          
      </form>
    </div>
  )
}


export default Sort
