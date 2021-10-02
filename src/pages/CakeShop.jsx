import CakeShopContainer from "../components/CakeShop/CakeShopContainer";
import { Provider } from 'react-redux';
import store from '../components/CakeShop/redux/store';
import HooksCakeContainer from "../components/CakeShop/HooksCakeContainer";
import IceCreamContainer from "../components/CakeShop/IceCreamContainer";  
import HooksBreadContainer from "../components/CakeShop/BreadContainer";
import NewCakeShopContainer from "../components/CakeShop/NewCakeShopContainer";
import ItemContainer from "../components/CakeShop/ItemContainer";
import UserContainer from "../components/CakeShop/UserContainer";

const CakeShop = () => {
    return <>   
        <Provider store={store} > 
            <UserContainer />
            
            <ItemContainer cake />
            <ItemContainer />
            <CakeShopContainer /> 
            <HooksCakeContainer />
            <IceCreamContainer />
            <HooksBreadContainer />
            <NewCakeShopContainer />
        </Provider>  
    </>;
}

export default CakeShop;
