import CakeShopContainer from "../components/CakeShop/CakeShopContainer";
import { Provider } from 'react-redux';
import store from '../components/CakeShop/redux/store';
import HooksCakeContainer from "../components/CakeShop/HooksCakeContainer";
import IceCreamContainer from "../components/CakeShop/IceCreamContainer"; 

const CakeShop = () => {
    return <>   
        <Provider store={store} > 
            <CakeShopContainer /> 
            <HooksCakeContainer />
            <IceCreamContainer />
        </Provider>  
    </>;
}

export default CakeShop;
