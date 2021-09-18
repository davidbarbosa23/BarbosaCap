import React from 'react';
import { Switch, RouteProps } from 'react-router-dom';
import { useIntl } from 'react-intl';

const LocalizedSwitch: React.FC = ({ children }) => {
  /**
   * inject params and formatMessage through hooks, so we can localize the route
   */
  const { formatMessage, locale } = useIntl();

  /**
   *
   * @param path can be string, undefined or string array
   * @returns Localized string path or path array
   */
  function localizeRoutePath(path?: string | readonly string[]) {
    switch (typeof path) {
      case 'undefined':
        return undefined;
      case 'object':
        return path.map((key) => `/${locale}${formatMessage({ id: key })}`);
      default:
        return path === '*' ? path : `/${locale}${formatMessage({ id: path })}`;
    }
  }

  /**
   * Apply localization to all routes
   * Also checks if all children elements are <Route /> components
   */
  return (
    <Switch>
      {React.Children.map(children, (child) =>
        React.isValidElement<RouteProps>(child)
          ? React.cloneElement(child, {
              ...child.props,
              path: localizeRoutePath(child.props.path),
            })
          : child
      )}
    </Switch>
  );
};

export default LocalizedSwitch;
