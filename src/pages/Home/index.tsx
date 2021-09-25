import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

const Home: FC = () => (
  <section data-testid="PageHome">
    <h1>
      <FormattedMessage id="home.title" />
    </h1>
    <div>
      <FormattedMessage id="home.content" />
    </div>
  </section>
);

export default Home;
