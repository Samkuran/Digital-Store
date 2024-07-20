import { HomePage } from "./pages/HomePage/HomePage";
import { ProductListingPage } from "./pages/ProductListingPage/ProductListingPage"
import { ProductViewPage } from "./pages/ProductViewPage/ProductViewPage"

export const routes = [
    {
        path: "/",
        pageComponent: HomePage,
    },
    {
        path: "/ProductListing",
        pageComponent: ProductListingPage,
    },
    {
        path: "/ProductView",
        pageComponent: ProductViewPage,
    },
]