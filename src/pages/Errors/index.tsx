import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

const Errors: FC = () => (
  <section>
    <h1>
      <FormattedMessage id="error.title" />
    </h1>
    <div>
      <FormattedMessage id="error.content" />
    </div>
  </section>
);

export default Errors;
