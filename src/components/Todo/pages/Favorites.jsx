import { useContext } from "react";
import FavoriteContext from "../../../store/favorites-context";
import MeetupList from "../Meetups/MeetupList";
const Favorites = ()=>{

    const favoritesCtx = useContext(FavoriteContext)
    let content;

    if( favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>
    }else{
        content =  <MeetupList meetups={favoritesCtx.favorites}/>
    }
    return(
    <> 
        {content}
    </>
    );
}

export default Favorites;