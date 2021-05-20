import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('Avatar List Container', () => {
    it('Renders Avatar 20 character list to screen', async () => {
        render(<List />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});