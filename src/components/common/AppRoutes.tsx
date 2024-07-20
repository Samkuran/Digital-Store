import { Route, Routes } from "react-router-dom";
import { NotFound } from "../../pages/NotFound/NotFound";
import { routes } from "../../routes";
import { Layout } from "../../pages/Layout";


export function AppRoutes(){
    return(
        <>
            <Routes>
                {routes.map(route => {
                    const {
                        path,
                        pageComponent,
                      } = route
                      const PageComponent = pageComponent
                      return (
                        <Route key={path} path={path} element={<Layout><PageComponent /></Layout>}/>
                      )
                })}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}