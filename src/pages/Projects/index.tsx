import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const Projects: FC = () => {
  const intl = useIntl();

  return (
    <section>
      <h1>
        <FormattedMessage id="projects.title" />
      </h1>
      <div>
        <FormattedMessage
          id="projects.content"
          values={{
            medium: <a href={intl.formatMessage({ id: 'links.medium' })}>medium</a>,
            devto: <a href={intl.formatMessage({ id: 'links.dev.to' })}>dev.to</a>,
          }}
        />
      </div>
    </section>
  );
};

export default Projects;
