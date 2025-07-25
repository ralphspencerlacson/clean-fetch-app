import React from 'react'
import PageTitle from '../../components/common/PageTitle'
import Settings from '../../components/common/Settings'
import TagManager from '../../components/tag/TagManager';

const Services = () => {
  return (
      <>
          <PageTitle
              title="Services"
              description="Manage your services here"
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

export default Services
