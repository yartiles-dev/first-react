import React from "react";
import {Route} from 'react-router-dom'

import withSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CategoryPageWithSpinner = withSpinner(CategoryPage)

export interface Collection {
    id: number;
    title: string;
    routeName: string;
    items: Item[]
}

export interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number
}

class ShopPage extends React.Component<any, any> {
    state = {
        loading: true
    }

    componentDidMount() {
        const myPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve()
            }, 1500)
        })

        myPromise.then(() => this.setState({loading: false}))
    }

    render() {
        const {match} = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

// const ShopPage = ({match}) => (
//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionOverview}/>
//         <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
//     </div>
// )
export default ShopPage