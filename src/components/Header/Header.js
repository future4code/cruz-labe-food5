import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { HeaderContainer, HeaderBar, HeaderTitle } from "./styledHeader"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goBack } from '../../routes/coordinator';


export default function Header() {
     const history = useHistory()

     return (
          <HeaderContainer>
               <HeaderBar>
                    <Route exact path={['/signup', '/restaurant/:id', '/edit-address', '/cart']}>
                         <ArrowBackIosIcon size={24} onClick={() => goBack(history)} />
                    </Route>
               </HeaderBar>

               <HeaderBar>
                    <Route exact path={['/login', '/signup', '/edit-address']}>
                         <HeaderTitle></HeaderTitle>
                    </Route>
                    <Route exact path={'/home'}>
                         <HeaderTitle>4Food</HeaderTitle>
                    </Route>
                    <Route exact path={'/restaurant/:id'}>
                         <HeaderTitle>Restaurante</HeaderTitle>
                    </Route>
                    <Route exact path={'/cart'}>
                         <HeaderTitle>Carrinho</HeaderTitle>
                    </Route>
                    <Route exact path={'/profile'}>
                         <HeaderTitle>Perfil</HeaderTitle>
                    </Route>
               </HeaderBar>
          </HeaderContainer>

     );
}