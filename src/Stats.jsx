import "./index1.css"

export default function Stats({items}){
    if(!items.length){
      return <p className='stats'><em>開始寫些東西到你的清單</em></p>
    }
    const numitem = items.length;
    const numpack = items.filter((item) => item.packed).length;
    return(
      <footer className='stats'>
        <em>
          { numpack === numitem ? "你全都打包好了" :
            `你現在有 ${numitem} 樣東西在你的清單中已經打包 ${numpack} 樣`
          }
        </em>
      </footer>
    );
  }