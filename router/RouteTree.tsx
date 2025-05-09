import IndexPage from '../src/page/000.index/page';
import TestSurfacePage from '../src/page/003.test/001.surface-test/page';
import TitlePage from '../src/page/002.title/page';
import TestBabylonPage from '../src/page/003.test/002.babylon-test/page';


import {
    Link,
    Outlet,
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router'

import React from "react";

import NavBar from "./NavBar"


const rootRoute = createRootRoute({
    component: () => (
        <>

            <div >

                <NavBar />

                <div style={{ position: 'absolute', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' }} >
                    <Outlet />
                </div>

            </div>

        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return (
            <IndexPage />
        );
    },
});

const testSurfaceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/shade/surface-test",
    component: function Test() {
        return (
            <TestSurfacePage />
        );
    },
});

const testOpenBabylon = createRoute({
    getParentRoute: () => rootRoute,
    path: "/solid/open-babylon",
    component: function Test() {
        return (
            <TestBabylonPage />
        );
    },
});


const titleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/title",
    component: function Test() {
        return (
            <TitlePage />
        );
    },
});

export var RouteTree = () => {

    var item = rootRoute.addChildren([indexRoute, testSurfaceRoute, titleRoute, testOpenBabylon  ]);
    return item

}

