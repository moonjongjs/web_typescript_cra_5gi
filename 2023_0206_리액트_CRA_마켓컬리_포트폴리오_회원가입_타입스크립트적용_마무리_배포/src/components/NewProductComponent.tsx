import React from 'react';

function NewProductComponent({신상품, commaRegExp}: any){

    console.log('신상품 목록 가져오기 ',   신상품 );
    console.log('commaRegExp 가져오기 ',  commaRegExp() );


    return (
        <div>
            {

                
                신상품.map((item: any,idx: any)=>{

                    console.log(idx,  item.상품이미지, item.제조사 );

                    return(
                        <li key={idx}>
                            <div className="col-gap">
                                <div className="wrap">
                                    <div className="img-box">
                                        <img src={`./img/sub_main1/${item.상품이미지}`} alt="" />
                                        <a href="!#" className='cart-btn'><img src={`./img/sub_main1/${item.카트이미지}`} alt="" /></a>
                                    </div>
                                    <div className="caption">
                                        <h6>{item.배송구분}</h6>
                                        <h2><strong>[{item.제조사}]</strong> <em>{item.상품명}</em></h2>
                                        <h3>
                                            {
                                                item.할인율 > 0 ?  <strong>{Math.round(item.할인율*100)}%</strong> : ''
                                            }   
                                            <em>{ commaRegExp(Math.round(item.정가*(1-item.할인율))) }</em>                                                                 
                                        </h3>
                                            {
                                                item.할인율 > 0 && <h3><s>{commaRegExp(item.정가)}</s></h3>
                                            }

                                        <h5>{item.상품정보}</h5>
                                        <h4>{item.판매처}</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )    
                })
                
            }
        </div>
    );
};

export default NewProductComponent;