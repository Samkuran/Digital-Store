import { Route, Routes } from "react-router-dom";
import { NotFound } from "../../pages/NotFound/NotFound";
import { routes } from "../../routes";


export function AppRoutes(){
    return(
        <>
            <Routes>
                {routes.map(route => {
                    const {
                        path,
                        pageComponent,
                        layoutComponent,
                      } = route
                      const PageComponent = pageComponent
                      const LayoutComponent = layoutComponent
                      return (
                        <Route key={path} path={path} element={
                                                                <LayoutComponent>
                                                                    <PageComponent />
                                                                </LayoutComponent>}/>
                      )
                })}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}