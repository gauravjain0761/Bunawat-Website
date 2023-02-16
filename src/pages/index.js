import React, { useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./home/home";
import AllProduct from "./allProduct/allProduct";
import Product from "./product/product";
import BASE_URL from "../_constant/index";
import Checkout from "./checkout/index";
import OrderConfirmation from "./orderConfirmation/index";
import UserProfile from "./userProfile/index";
import Reviews from "./reviews/index";
import ClubHome from "./clubHome/index";
import ErrorPage from "./404/index";
import Returns from "./returns/index";
import SizeGuide from "./sizeGuide";
import PaymentOptions from "../components/checkout/PaymentOptions";
import Storage from "../services/storage";
import { setUserData } from "../redux/reducers/user";
import { useDispatch } from "react-redux";
import { setCartCount } from "../redux/reducers/cart";
import TrackOrder from "./trackOrder";
import Login from "./logIn";


export default function Index() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserData(JSON.parse(Storage.get("userData")) ?? {}));
        dispatch(setCartCount(JSON.parse(Storage.get("cartData"))?.length ?? 0));
    }, [])

    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path={BASE_URL.BASE_URL}>
                        <Home />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `allProduct`}>
                        <AllProduct />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `allProduct/:id`}>
                        <AllProduct />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product`}>
                        <Product />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product/:id`}>
                        <Product />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product/:id/:type`}>
                        <Product />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `checkout`}>
                        <Checkout />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `orderConfirmation`}>
                        <OrderConfirmation />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `userProfile`}>
                        <UserProfile />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `reviews`}>
                        <Reviews />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `clubHome`}>
                        <ClubHome />
                    </Route>


                    <Route exact path={BASE_URL.BASE_URL + "returns"}>
                        <Returns />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "sizeGuide"}>
                        <SizeGuide />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "paymentOptions"}>
                        <PaymentOptions />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "trackOrder"}>
                       <TrackOrder />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "login"}>
                       <Login />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "*"}>
                        <ErrorPage />
                    </Route>

                </Switch>
            </Layout>
        </>
    );
}
