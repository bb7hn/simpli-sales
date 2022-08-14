import React,{useState,useEffect} from 'react'
import { getToken } from '../context/AuthContext'
import LoadingLight from '../img/LoadingLight.svg';
import { AiOutlineDoubleRight,AiOutlineRight,AiOutlineDoubleLeft,AiOutlineLeft } from "react-icons/ai";
import Swal from 'sweetalert2';
// CUSTOM FUNCTIONS
const checkDeviceType = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check?'mobile':'desktop';
};
const deviceType = checkDeviceType();
const Toast = Swal.mixin({
    toast: true,
    position: deviceType==='desktop'?'top-right':'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
const Products = () => {
    //SET STATES
    const [loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [pageCount,setPageCount] = useState(1);
    const [productPerPage,setProductPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagingButtons,setPagingButtons] = useState(['']);
    //WATCH STATE CHANGES
    useEffect(()=>{
            setLoaded(false);
            let limit = productPerPage;
            let offset = limit * (currentPage-1);
            const query = `
                {
                    products(
                        index: ${offset}
                        limit: ${limit}
                    ) {
                    count
                    products {
                        id
                        description3
                        barcode1
                        isFavorites
                        price {
                            price {
                                priceId
                                price
                                parcelPrice
                                discount
                                netPrice
                                netParcelPrice
                            }
                        }
                        stockStatus {
                            available
                        }
                        webPublished
                        mobilePublished
                        }
                    }
                }  
            `;
            const TOKEN = getToken();
            let bearer = 'Bearer ' + TOKEN;
            fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                body:JSON.stringify({query:query}),
                withCredentials: true,
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                }
            }).then(r=>r.json()).then(response=>{
                response = response.data.products
                console.log(response);
                let productList= response.products;
                let totalCount = Math.ceil(response.count/productPerPage)
                setPageCount(totalCount);
                setProducts(productList);
                setLoaded(true);
            });
            
    },[productPerPage,currentPage]);

    //Watch pageCount seperate cause of performance issues 
    // if watch them with productPerPage app request two times to api for every change. So have to paginate seperate. 
    useEffect(()=>{
        if(currentPage<=0){
            setCurrentPage(1);
        }
        else if(currentPage>pageCount){
            setCurrentPage(pageCount);
        }
        if(pageCount>4){
            if(currentPage===1){
                setPagingButtons([1,2,3,'...']);
            }
            else if(currentPage===2){
                setPagingButtons([1,2,3,'...']);
            }
            else if(currentPage===3){
                setPagingButtons([1,2,3,4,'...']);
            }
            else if(currentPage>3 && currentPage<pageCount-2){
                setPagingButtons(['...',currentPage-1,currentPage,currentPage+1,'...']);
            }
            else if(currentPage=== pageCount-2){
                setPagingButtons(['...',pageCount-3,pageCount-2,pageCount-1,pageCount]);
            }
            else if(currentPage=== pageCount-1){
                setPagingButtons(['...',pageCount-2,pageCount-1,pageCount]);
            }
            else if(currentPage=== pageCount){
                setPagingButtons(['...',pageCount-2,pageCount-1,pageCount]);
            }
            else{
                setPagingButtons([currentPage-1,currentPage,currentPage+1,'...',pageCount]);
            }
        }
        else{
            console.log('here')
            setPagingButtons(Array.from({length: pageCount}, (_, i) => i + 1));
        }
    },[pageCount,currentPage]);
    return (
        <>
            <h1>Products</h1>
            <div className="row">                
                <div className='row sticky-top bg-white pt-3 border-bottom container-fluid mx-auto'>
                    <div className="col-sm-12 col d-flex align-items-center justify-content-center text-muted mb-3">
                        Show
                        <select 
                            className="form-select mx-1" 
                            style={{maxWidth:"5rem"}}
                            onChange={e=>{
                                setProductPerPage(parseInt(e.currentTarget.value));
                            }}
                            value={productPerPage}
                        >
                            <option value="9">9</option>
                            <option value="18">18</option>
                            <option value="27">27</option>
                            <option value="36">36</option>
                            <option value="45">45</option>
                        </select>
                        products per page
                    </div>
                    <nav className='col d-flex align-items-center justify-content-center'>
                        <ul className="pagination">
                            {/* first page */}
                            <li 
                                onClick={()=>{setCurrentPage(1)}}
                                className="page-item"
                            >
                                <button className="page-link" ><AiOutlineDoubleLeft /></button>
                            </li>
                            {/* previous page */}
                            {/* <li 
                                onClick={currentPage===1?()=>{}:()=>{setCurrentPage(currentPage-1)}}
                                className={(currentPage===1?'disabled ':'')+"page-item"}
                            >
                                <button className="page-link" ><AiOutlineLeft /></button>
                            </li> */}
                            
                            {
                                pagingButtons.map((val,key)=>{
                                    return(
                                        <li 
                                            className={((val==="...")?'disabled ':(val===currentPage)?'active ':'')+"page-item"}
                                            key={key+"__paginateButton__"+val}
                                        >
                                            <button 
                                                className="page-link" 
                                                onClick={val!=="..."?()=>{
                                                    setCurrentPage(val);
                                                }:()=>{}}
                                            >
                                                {val}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                            
                            {/* next page  */}
                            {/* <li 
                                onClick={currentPage===pageCount?()=>{}:()=>{setCurrentPage(currentPage+1)}}
                                className={(currentPage===pageCount?'disabled ':'')+"page-item"}
                            >
                                <button 
                                    className="page-link" 
                                    
                                >
                                    <AiOutlineRight />
                                </button>
                            </li> */}
                            {/* last page */}
                            <li 
                                onClick={()=>{setCurrentPage(pageCount)}}
                                className="page-item"
                            >
                                <button className="page-link" ><AiOutlineDoubleRight /></button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="seperator"></div>
                {
                    
                    (!loaded)?    
                        <div 
                            className='position-fixed top-0 start-0 container-fluid d-flex '
                            style={{width:'100vw',height:'100vh', backgroundColor:'#00000090',zIndex:1021}}
                        >
                            <img className="m-auto" alt="loader icon" src={LoadingLight }/>
                        </div>
                    :
                    products.map((product,key)=>{
                        return(
                            <div key={key+'__product__'+product.id} className="d-flex col mt-3 m-auto align-items-center">
                                <div className="card m-auto shadow" style={{width: "18rem"}}>
                                    {/* <img src="..." className="card-img-top" alt="product" /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{product.description3}</h5>
                                        <div className="card-text">
                                            <div className="row mb-3">
                                                <div className="col-6">
                                                    <span className='fw-bold'>Barcode :</span>
                                                    <br />
                                                    {product.barcode1}
                                                </div>
                                                <div className="col-6">
                                                    <span className='fw-bold'>Price:</span>
                                                    <br />
                                                    £{product.price.price.netPrice}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button 
                                            className={(!product.stockStatus.available?'disabled ':'')+"btn btn-primary"}
                                            onClick={()=>{
                                                Toast.fire({
                                                    icon:'info',
                                                    title:'Sorry',
                                                    text:'This feature is not enabled at the moment 😅'
                                                });
                                            }}
                                        >
                                                Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </>
    )
}

export default Products