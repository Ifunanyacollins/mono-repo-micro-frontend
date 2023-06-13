import { render } from '@testing-library/react';

import Root from './root';

describe('Root', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Root />);
    expect(baseElement).toBeTruthy();
  });
});
