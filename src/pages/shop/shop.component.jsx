import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopItems } from '../../redux/shop/shop.selectors';

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const ShopPage = ({ collections }) => (<div>
    {
        collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
</div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps)(ShopPage);