import { HomePage } from "./pages/HomePage/HomePage";
import { ProductListingPage } from "./pages/ProductListingPage/ProductListingPage"
import { ProductViewPage } from "./pages/ProductViewPage/ProductViewPage"
import { Layout } from "./pages/Layout";

export const routes = [
    {
        path: "/",
        pageComponent: HomePage,
        layoutComponent: Layout,
    },
    {
        path: "/ProductListing",
        pageComponent: ProductListingPage,
        layoutComponent: Layout,
    },
    {
        path: "/ProductView",
        pageComponent: ProductViewPage,
        layoutComponent: Layout,
    },
]