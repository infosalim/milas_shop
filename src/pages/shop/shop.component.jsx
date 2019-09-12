import React from 'react';
import { Route } from 'react-router-dom';

// components
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

           console.log(collectionsMap);
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );
    }
}

export default ShopPage;