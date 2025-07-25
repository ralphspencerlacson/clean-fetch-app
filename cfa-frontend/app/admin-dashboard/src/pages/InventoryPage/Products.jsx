import React from 'react'
import PageTitle from '../../components/common/PageTitle'
import Settings from '../../components/common/Settings'
import TagManager from '../../components/tag/TagManager';

const Products = () => {
  return (
      <>
          <PageTitle
              title="Products"
              description="Manage your products here"
              button={
                  <Settings
                      title="Settings"
                      width={600}
                  >
                    <TagManager />
                  </Settings>
              }
          />
      </>
  );
}

export default Products
