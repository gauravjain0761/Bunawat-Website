import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./home";
import Category from "./category";
import Product from "./product";
import BASE_URL from "../_constant/index";


export default function index({ socket }) {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path={BASE_URL.BASE_URL}>
                        <Home />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `category`}>
                        <Category />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product`}>
                        <Product />
                    </Route>

                    {/* <Route exact path={BASE_URL.BASE_URL + "notfound"}>
            <Notfound />
          </Route>
          <Route path="*">
            <Notfound />
          </Route> */}
                </Switch>
            </Layout>
        </>
    );
}
